const prisma = require('../utils/prisma');

const getCustomerByPhone = async (phoneNumber) => {
  return await prisma.customer.upsert({
    where: { phoneNumber },
    update: { lastInteraction: new Date() },
    create: { phoneNumber }
  });
};

const saveMessage = async (customerId, role, content, whatsappId = null) => {
  if (whatsappId) {
    const existing = await prisma.chat.findUnique({ where: { whatsappId } });
    if (existing) return existing;
  }
  return await prisma.chat.create({
    data: {
      customerId,
      role,
      content,
      whatsappId
    }
  });
};

const getRecentHistory = async (customerId, limit = 10) => {
  return await prisma.chat.findMany({
    where: { customerId },
    orderBy: { createdAt: 'desc' },
    take: limit
  });
};

const updateHandoffStatus = async (customerId, status) => {
  return await prisma.customer.update({
    where: { id: customerId },
    data: { handoffStatus: status }
  });
};

const updateCustomerMetadata = async (customerId, metadata) => {
  const customer = await prisma.customer.findUnique({ where: { id: customerId } });
  const existingMetadata = customer.metadata || {};
  
  return await prisma.customer.update({
    where: { id: customerId },
    data: { 
      metadata: { ...existingMetadata, ...metadata }
    }
  });
};

module.exports = {
  getCustomerByPhone,
  saveMessage,
  getRecentHistory,
  updateHandoffStatus,
  updateCustomerMetadata
};
