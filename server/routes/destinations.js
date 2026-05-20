const express = require('express');
const router = express.Router();
const prisma = require('../utils/prisma');

router.get('/', async (req, res) => {
  try {
    const packages = await prisma.package.findMany({
      include: { itineraries: true },
      orderBy: { createdAt: 'desc' }
    });

    // Map to the format the frontend expects
    const formatted = packages.map(pkg => ({
      id: pkg.id,
      name: pkg.title,
      description: pkg.description,
      price: pkg.price,
      image: pkg.images ? JSON.parse(pkg.images)[0] : 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&q=80&w=800',
      region: pkg.location,
      type: pkg.category || 'Experience',
      tagline: 'North Bengal Magic', // Default tagline
      duration: pkg.duration || '3 Days',
      inclusions: pkg.inclusions ? JSON.parse(pkg.inclusions) : []
    }));

    res.json(formatted);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
