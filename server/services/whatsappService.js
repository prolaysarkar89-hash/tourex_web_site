const axios = require('axios');

const WHATSAPP_TOKEN = process.env.WHATSAPP_TOKEN;
const PHONE_NUMBER_ID = process.env.PHONE_NUMBER_ID;
const VERSION = 'v17.0';

const sendTextMessage = async (to, text) => {
  try {
    const response = await axios({
      method: 'POST',
      url: `https://graph.facebook.com/${VERSION}/${PHONE_NUMBER_ID}/messages`,
      data: {
        messaging_product: 'whatsapp',
        to: to,
        text: { body: text },
      },
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${WHATSAPP_TOKEN}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error sending WhatsApp message:', error.response ? error.response.data : error.message);
    throw error;
  }
};

const sendImageMessage = async (to, imageUrl, caption) => {
  try {
    const response = await axios({
      method: 'POST',
      url: `https://graph.facebook.com/${VERSION}/${PHONE_NUMBER_ID}/messages`,
      data: {
        messaging_product: 'whatsapp',
        to: to,
        type: 'image',
        image: {
          link: imageUrl,
          caption: caption
        },
      },
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${WHATSAPP_TOKEN}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error sending WhatsApp image:', error.response ? error.response.data : error.message);
    throw error;
  }
};

const sendTypingIndicator = async (to) => {
  // WhatsApp Cloud API doesn't have a direct "typing" indicator like Messenger,
  // but some implementations use "mark as read" to show interaction.
  try {
    // This is optional and requires message ID which we might not always have here.
    // Keeping it as a placeholder if needed later.
  } catch (error) {
    console.error('Error sending typing indicator:', error);
  }
};

module.exports = {
  sendTextMessage,
  sendImageMessage
};
