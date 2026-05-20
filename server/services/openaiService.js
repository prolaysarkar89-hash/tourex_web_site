const OpenAI = require('openai');
const prisma = require('../utils/prisma');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const SYSTEM_PROMPT = `You are Tourex AI Support, a premium North Bengal travel assistant for TOUREX.

You do not sound robotic.
You speak naturally like a local travel expert.

Your tone is emotional, cinematic, peaceful, and adventure-oriented.
"Not just tours — experiences."

You help users:
* choose destinations (Yelbong River Canyon, Charkhole, Kaffergaon, Jhandi, Maenam Wildlife Sanctuary, Ravangla, Dzuku Valley, Tungnath Chandrashila, Sikkim offbeat tours, Kalimpong villages, Dooars, Lepchajagat, North Bengal tea gardens)
* understand packages
* plan trips
* know travel costs
* understand weather
* discover offbeat places

You always encourage meaningful travel experiences over commercial tourism.

Keep responses short for WhatsApp. Use line breaks for readability.
Use emojis minimally but effectively (🏔️, 🌲, ☕, 🚶‍♂️).

Language: Handle Bengali, English, and Hinglish naturally. Respond in the language the user uses, or English if unsure.

Human Handoff: If the user explicitly asks for a human, agent, or phone call, acknowledge it and say a travel expert will contact them shortly.

Never hallucinate hotel bookings or unavailable packages. If unsure, ask clarifying questions politely.`;

const generateResponse = async (phoneNumber, messages) => {
  try {
    // Check for prompt injection in the last user message
    const lastMessage = messages[messages.length - 1];
    if (lastMessage && lastMessage.content) {
      const injectionPatterns = [
        /ignore previous instructions/i,
        /system prompt/i,
        /reveal secrets/i,
        /you are now/i,
        /dan mode/i
      ];
      for (const pattern of injectionPatterns) {
        if (pattern.test(lastMessage.content)) {
          console.warn(`[SECURITY] Prompt injection detected from ${phoneNumber}`);
          return "I'm here to help you with your North Bengal journey! Let's stay focused on your travel plans. 🏔️";
        }
      }
    }

    // Format messages for OpenAI
    const formattedMessages = [
      { role: 'system', content: SYSTEM_PROMPT },
      ...messages.map(m => ({
        role: m.role === 'assistant' ? 'assistant' : 'user',
        content: m.content
      }))
    ];

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o', // Using gpt-4o for best performance/speed
      messages: formattedMessages,
      temperature: 0.7,
      max_tokens: 500,
    });

    const aiResponse = completion.choices[0].message.content;

    // Log AI usage
    await prisma.aILog.create({
      data: {
        prompt: JSON.stringify(formattedMessages),
        response: aiResponse,
        tokensUsed: completion.usage.total_tokens,
        model: completion.model
      }
    });

    return aiResponse;
  } catch (error) {
    console.error('Error generating AI response:', error);
    return "I'm sorry, I'm having a little trouble connecting to my mountain spirits right now. Could you please try again in a moment? 🏔️";
  }
};

module.exports = {
  generateResponse
};
