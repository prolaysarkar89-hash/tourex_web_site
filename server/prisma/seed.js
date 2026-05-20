const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const packages = [
    {
      title: 'Yelbong River Canyon',
      description: 'Experience the thrill of river canyoning in the hidden gems of North Bengal. Wade through crystal clear waters and discover ancient caves.',
      price: 4500,
      duration: '2 Days',
      location: 'Kalimpong',
      category: 'Adventure',
      isTrending: true,
      images: JSON.stringify(['https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&q=80&w=800']),
      inclusions: JSON.stringify(['Camping', 'Gear', 'Guide', 'Meals'])
    },
    {
      title: 'Charkhole Village Stay',
      description: 'A serene escape into the laps of nature. Wake up to the panoramic view of Mt. Kanchenjunga from your cottage window.',
      price: 3200,
      duration: '3 Days',
      location: 'Charkhole',
      category: 'Village',
      isTrending: false,
      images: JSON.stringify(['https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800']),
      inclusions: JSON.stringify(['Homestay', 'Local Food', 'Sightseeing'])
    },
    {
      title: 'Ravangla & Buddha Park',
      description: 'Explore the spiritual side of Sikkim. Visit the iconic Buddha Park and enjoy the misty mountain trails of Ravangla.',
      price: 5800,
      duration: '4 Days',
      location: 'South Sikkim',
      category: 'Spiritual',
      isTrending: true,
      images: JSON.stringify(['https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&q=80&w=800']),
      inclusions: JSON.stringify(['Transport', 'Hotel', 'Breakfast', 'Guide'])
    }
  ];

  console.log('Seeding packages...');
  for (const pkg of packages) {
    await prisma.package.create({
      data: pkg
    });
  }
  console.log('Seeding complete!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
