const whatsappService = require('./services/whatsappService');
require('dotenv').config();

const to = process.argv[2] || '918116413984';
const message = process.argv[3] || '🏔️ Hello from Tourex AI! This is a test message to verify the WhatsApp integration.';

async function send() {
  console.log(`Sending message to ${to}...`);
  try {
    await whatsappService.sendTextMessage(to, message);
    console.log('✅ Message sent successfully!');
  } catch (error) {
    console.error('❌ Failed to send message:', error.response ? JSON.stringify(error.response.data) : error.message);
  }
  process.exit();
}

send();
