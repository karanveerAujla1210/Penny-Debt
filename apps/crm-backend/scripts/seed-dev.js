#!/usr/bin/env node
// Simple seed script for development/staging. Safe-guards: requires explicit MONGODB_URI env var.

const mongoose = require('mongoose');
const path = require('path');

async function main() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error('Please set MONGODB_URI to your development MongoDB before running this script.');
    process.exit(2);
  }

  // ensure models load from src
  const modelsPath = path.join(__dirname, '..', 'src', 'models');
  require(modelsPath); // loads models into mongoose

  const { Role } = require('../src/models');
  const { User } = require('../src/models');
  const { Customer } = require('../src/models');
  const { Loan } = require('../src/models');
  const { Program } = require('../src/models');
  const { Payment } = require('../src/models');

  await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  console.log('Connected to', uri);

  try {
    // Roles
    const roles = ['Admin', 'Advisor', 'Case', 'Collections', 'Employee'];
    for (const r of roles) {
      const exists = await Role.findOne({ name: r });
      if (!exists) {
        await Role.create({ name: r, createdAt: new Date() });
        console.log('Created role', r);
      }
    }

    // Admin user
    let admin = await User.findOne({ email: 'admin@local' });
    if (!admin) {
      admin = await User.create({
        email: 'admin@local',
        name: 'Local Admin',
        roles: ['Admin'],
        password: 'password' // for dev only — ensure not used in prod
      });
      console.log('Created admin user');
    }

    // Sample customers
    const customers = [];
    for (let i = 1; i <= 3; i++) {
      const c = await Customer.create({ name: `Customer ${i}`, email: `cust${i}@example.com`, phone: `+1000000000${i}` });
      customers.push(c);
    }
    console.log('Created customers:', customers.map(c=>c._id).join(', '));

    // Create loans for first customer
    const loan = await Loan.create({ customerId: customers[0]._id, principal: 5000, interestRate: 12, status: 'OPEN' });
    console.log('Created loan', loan._id);

    // Create a program
    const program = await Program.create({ caseId: 'case-dev-1', status: 'ACTIVE', loans: [{ loanId: loan._id, targetSettlementAmount: 4500 }] });
    console.log('Created program', program._id);

    // Create a payment
    const payment = await Payment.create({ loanId: loan._id, amount: 500, method: 'bank', paidDate: new Date() });
    console.log('Created payment', payment._id);

    console.log('Seed complete.');
  } catch (err) {
    console.error('Seed error:', err && err.message);
  } finally {
    await mongoose.disconnect();
    process.exit(0);
  }
}

main();
