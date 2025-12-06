/**
 * Simple seed script to create roles, a sample user and a sample customer.
 * Run: node scripts/seed.js (from apps/crm-backend)
 */
require('dotenv').config();
const mongoose = require('mongoose');
const path = require('path');

const connectDb = require('../src/config/db').connectDb;

async function main() {
  await connectDb();
  const Role = require('../src/models/role');
  const User = require('../src/models/user');
  const Customer = require('../src/models/customer');

  // Create roles
  const roles = ['Admin', 'Advisor', 'Agent', 'Case'];
  for (const r of roles) {
    await Role.updateOne({ name: r }, { $setOnInsert: { name: r } }, { upsert: true });
  }

  // Create sample user
  let user = await User.findOne({ email: 'admin@example.com' });
  if (!user) {
    user = new User({ name: 'Admin', email: 'admin@example.com', password: 'password123', roles: ['Admin'] });
    await user.save();
  }

  // Create sample customer
  let customer = await Customer.findOne({ email: 'jane.doe@example.com' });
  if (!customer) {
    customer = new Customer({ name: 'Jane Doe', email: 'jane.doe@example.com', phone: '9999999999' });
    await customer.save();
  }

  console.log('Seed complete.');
  process.exit(0);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
