const prisma = require('./utils/prisma');
const geminiService = require('./services/geminiService');
const whatsappService = require('./services/whatsappService');
const chatService = require('./services/chatService');
require('dotenv').config();

async function runDiagnostic() {
  console.log('🔍 Starting Tourex AI Diagnostic (Gemini Edition)...\n');

  // 1. Test Database
  try {
    const testCustomer = await chatService.getCustomerByPhone('1234567890');
    console.log('✅ Database: Connected and working.');
  } catch (error) {
    console.error('❌ Database Error:', error.message);
  }

  // 2. Test Gemini
  try {
    console.log('⏳ Testing Gemini AI response...');
    const response = await geminiService.generateResponse('1234567890', [{ role: 'user', content: 'Diagnostic test' }]);
    if (response && !response.includes("trouble connecting")) {
      console.log('✅ Gemini AI: Connected and generating responses.');
      console.log('   Response preview:', response.substring(0, 50) + '...');
    } else {
      throw new Error("Gemini returned a fallback error message.");
    }
  } catch (error) {
    console.error('❌ Gemini AI Error:', error.message);
  }

  // 3. Test Meta WhatsApp
  try {
    const testPhone = '918116413984';
    console.log(`\n⏳ Attempting to send a diagnostic message to ${testPhone}...`);
    await whatsappService.sendTextMessage(testPhone, '🏔️ Tourex AI System: Switched to Gemini successfully!');
    console.log('✅ Meta WhatsApp: Message sent successfully!');
  } catch (error) {
    console.error('❌ Meta WhatsApp Error:', error.response ? JSON.stringify(error.response.data) : error.message);
  }

  console.log('\n🏁 Diagnostic Complete.');
  process.exit();
}

runDiagnostic();
