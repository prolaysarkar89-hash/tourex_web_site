const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const prisma = require('../utils/prisma');
const whatsappService = require('../services/whatsappService');
const chatService = require('../services/chatService');

const register = async (req, res) => {
  const { email, password, name } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const admin = await prisma.adminUser.create({
      data: { email, password: hashedPassword, name }
    });
    res.json({ message: 'Admin created', id: admin.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const admin = await prisma.adminUser.findUnique({ where: { email } });
    if (!admin) return res.status(404).json({ message: 'Admin not found' });

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: admin.id, role: admin.role }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.json({ token, admin: { id: admin.id, email: admin.email, name: admin.name } });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllChats = async (req, res) => {
  try {
    const customers = await prisma.customer.findMany({
      include: {
        chats: {
          orderBy: { createdAt: 'desc' },
          take: 1
        }
      },
      orderBy: { lastInteraction: 'desc' }
    });
    res.json(customers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getCustomerChat = async (req, res) => {
  const { customerId } = req.params;
  try {
    const chats = await prisma.chat.findMany({
      where: { customerId },
      orderBy: { createdAt: 'asc' }
    });
    res.json(chats);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const sendAdminMessage = async (req, res) => {
  const { customerId, content } = req.body;
  try {
    const customer = await prisma.customer.findUnique({ where: { id: customerId } });
    if (!customer) return res.status(404).json({ message: 'Customer not found' });

    // Send WhatsApp
    await whatsappService.sendTextMessage(customer.phoneNumber, content);

    // Save to DB
    const chat = await chatService.saveMessage(customerId, 'assistant', content);

    res.json(chat);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateCustomerStatus = async (req, res) => {
  const { customerId } = req.params;
  const { status } = req.body;
  try {
    const customer = await chatService.updateHandoffStatus(customerId, status);
    res.json(customer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAnalytics = async (req, res) => {
  try {
    const totalLeads = await prisma.lead.count();
    const totalChats = await prisma.chat.count();
    const totalCustomers = await prisma.customer.count();
    const pendingHandoffs = await prisma.customer.count({ where: { handoffStatus: 'HUMAN_SUPPORT_REQUIRED' } });

    res.json({ totalLeads, totalChats, totalCustomers, pendingHandoffs });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  register,
  login,
  getAllChats,
  getCustomerChat,
  sendAdminMessage,
  updateCustomerStatus,
  getAnalytics
};
