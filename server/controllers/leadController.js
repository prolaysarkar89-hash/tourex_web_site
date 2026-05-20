const prisma = require('../utils/prisma');

const getAllLeads = async (req, res) => {
  try {
    const leads = await prisma.lead.findMany({
      include: { customer: true },
      orderBy: { createdAt: 'desc' }
    });
    res.json(leads);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateLead = async (req, res) => {
  const { id } = req.params;
  const { status, notes } = req.body;
  try {
    const lead = await prisma.lead.update({
      where: { id },
      data: { status, notes }
    });
    res.json(lead);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllLeads,
  updateLead
};
