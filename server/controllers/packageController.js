const prisma = require('../utils/prisma');

const getAllPackages = async (req, res) => {
  try {
    const packages = await prisma.package.findMany({
      include: { itineraries: true },
      orderBy: { createdAt: 'desc' }
    });
    res.json(packages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createPackage = async (req, res) => {
  const { title, description, price, duration, location, category, isTrending, images, inclusions, exclusions, itineraries } = req.body;
  try {
    const pkg = await prisma.package.create({
      data: {
        title,
        description,
        price,
        duration,
        location,
        category,
        isTrending,
        images,
        inclusions,
        exclusions,
        itineraries: {
          create: itineraries || []
        }
      },
      include: { itineraries: true }
    });
    res.json(pkg);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updatePackage = async (req, res) => {
  const { id } = req.params;
  const { title, description, price, duration, location, category, isTrending, images, inclusions, exclusions, itineraries } = req.body;
  try {
    // Delete old itineraries first or update them
    await prisma.itinerary.deleteMany({ where: { packageId: id } });

    const pkg = await prisma.package.update({
      where: { id },
      data: {
        title,
        description,
        price,
        duration,
        location,
        category,
        isTrending,
        images,
        inclusions,
        exclusions,
        itineraries: {
          create: itineraries || []
        }
      },
      include: { itineraries: true }
    });
    res.json(pkg);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deletePackage = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.itinerary.deleteMany({ where: { packageId: id } });
    await prisma.package.delete({ where: { id } });
    res.json({ message: 'Package deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllPackages,
  createPackage,
  updatePackage,
  deletePackage
};
