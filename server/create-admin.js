const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

// Load environment variables
require('dotenv').config();

const prisma = new PrismaClient();

async function main() {
  const email = 'admin@tourex.in';
  const password = 'tourex_admin_2026';
  const name = 'Tourex Super Admin';

  // Password strength validation
  if (password.length < 8) {
    console.error('❌ Password must be at least 8 characters long');
    return;
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const admin = await prisma.adminUser.upsert({
      where: { email },
      update: {},
      create: {
        email,
        password: hashedPassword,
        name,
        role: 'ADMIN'
      }
    });
    console.log('✅ Admin user created successfully!');
    console.log('Email:', email);
    console.log('Password:', password);
  } catch (error) {
    console.error('❌ Error creating admin:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
