const express = require('express');
const router = express.Router();
const webhookController = require('../controllers/webhookController');

// WhatsApp Webhook Verification
router.get('/', webhookController.verifyWebhook);

// WhatsApp Message Receiver
router.post('/', webhookController.handleMessage);

module.exports = router;
