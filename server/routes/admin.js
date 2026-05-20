const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const packageController = require('../controllers/packageController');
const leadController = require('../controllers/leadController');
const authMiddleware = require('../middleware/authMiddleware');
const { validateLogin, validatePackage, sanitizePrompt } = require('../middleware/validationMiddleware');

// Auth
router.post('/login', validateLogin, adminController.login);
router.post('/register', validateLogin, adminController.register); // Optional: only for initial setup

// Packages (Protected)
router.get('/packages', authMiddleware, packageController.getAllPackages);
router.post('/packages', authMiddleware, validatePackage, packageController.createPackage);
router.put('/packages/:id', authMiddleware, validatePackage, packageController.updatePackage);
router.delete('/packages/:id', authMiddleware, packageController.deletePackage);

// Leads (Protected)
router.get('/leads', authMiddleware, leadController.getAllLeads);
router.put('/leads/:id', authMiddleware, leadController.updateLead);

// Chats (Protected)
router.get('/chats', authMiddleware, adminController.getAllChats);
router.get('/chats/:customerId', authMiddleware, adminController.getCustomerChat);
router.post('/chats/send', authMiddleware, sanitizePrompt, adminController.sendAdminMessage);
router.put('/chats/status/:customerId', authMiddleware, adminController.updateCustomerStatus);

// Analytics (Protected)
router.get('/analytics', authMiddleware, adminController.getAnalytics);

module.exports = router;
