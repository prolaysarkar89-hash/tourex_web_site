const chatService = require('../services/chatService');
const geminiService = require('../services/geminiService');
const whatsappService = require('../services/whatsappService');

const verifyWebhook = (req, res) => {
  const mode = req.query['hub.mode'];
  const token = req.query['hub.verify_token'];
  const challenge = req.query['hub.challenge'];

  if (mode && token) {
    if (mode === 'subscribe' && token === process.env.VERIFY_TOKEN) {
      console.log('WEBHOOK_VERIFIED');
      res.status(200).send(challenge);
    } else {
      res.sendStatus(403);
    }
  }
};

const handleMessage = async (req, res) => {
  console.log('--- INCOMING WEBHOOK POST ---');
  console.log(JSON.stringify(req.body, null, 2));
  const body = req.body;

  // Check if it's a WhatsApp message
  if (body.object === 'whatsapp_business_account') {
    if (
      body.entry &&
      body.entry[0].changes &&
      body.entry[0].changes[0].value.messages &&
      body.entry[0].changes[0].value.messages[0]
    ) {
      const message = body.entry[0].changes[0].value.messages[0];
      const from = message.from; // Phone number
      const msgBody = message.text ? message.text.body : '';
      const whatsappId = message.id;

      if (!msgBody) {
        return res.sendStatus(200);
      }

      try {
        // 1. Get or create customer
        const customer = await chatService.getCustomerByPhone(from);

        // 2. Save user message to DB
        await chatService.saveMessage(customer.id, 'user', msgBody, whatsappId);

        // 3. Check for human handoff keywords
        const handoffKeywords = ['human', 'agent', 'call', 'talk to person', 'expert', 'support'];
        const needsHandoff = handoffKeywords.some(keyword => msgBody.toLowerCase().includes(keyword));

        if (needsHandoff) {
          await chatService.updateHandoffStatus(customer.id, 'HUMAN_SUPPORT_REQUIRED');
        }

        // 4. If already in human mode, don't auto-reply (except if they ask for AI again, maybe?)
        if (customer.handoffStatus === 'HUMAN') {
          // Just acknowledge or notify admin
          console.log(`Customer ${from} is in HUMAN mode. Message: ${msgBody}`);
          return res.sendStatus(200);
        }

        // 5. Get recent history for context
        const history = await chatService.getRecentHistory(customer.id);
        const reversedHistory = history.reverse(); // OpenAI needs chronological order

        // 6. Generate AI response
        const aiResponse = await geminiService.generateResponse(from, reversedHistory);

        // 7. Save AI response to DB
        await chatService.saveMessage(customer.id, 'assistant', aiResponse);

        // 8. Send response via WhatsApp
        await whatsappService.sendTextMessage(from, aiResponse);

        res.status(200).send('EVENT_RECEIVED');
      } catch (error) {
        console.error('Error processing message:', error);
        res.sendStatus(500);
      }
    } else {
      res.sendStatus(200);
    }
  } else {
    res.sendStatus(404);
  }
};

module.exports = {
  verifyWebhook,
  handleMessage
};
