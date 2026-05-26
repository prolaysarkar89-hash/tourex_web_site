const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const cache = await prisma.searchCache.findMany();
  console.log(JSON.stringify(cache, null, 2));
}

main().catch(console.error).finally(() => prisma.$disconnect());
