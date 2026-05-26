const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await prisma.searchCache.deleteMany();
  console.log('Search cache cleared successfully.');
}

main().catch(console.error).finally(() => prisma.$disconnect());
