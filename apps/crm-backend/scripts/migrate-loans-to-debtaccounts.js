/**
 * Migrate existing Loan documents into DebtAccount documents.
 * Usage: node scripts/migrate-loans-to-debtaccounts.js
 */
require('dotenv').config();
const mongoose = require('mongoose');
const { connectDb } = require('../src/config/db');

async function migrate() {
  await connectDb();
  const { Loan, DebtAccount } = require('../src/models');

  const loans = await Loan.find({}).lean();
  console.log('Found loans:', loans.length);

  for (const loan of loans) {
    try {
      const existing = await DebtAccount.findOne({ _id: loan._id });
      if (existing) continue;

      const acc = new DebtAccount({
        _id: loan._id, // preserve id to ease mapping
        customerId: loan.customerId || loan.clientId || null,
        lenderName: loan.lender || loan.bank || '',
        productType: loan.type || 'PERSONAL_LOAN',
        originalPrincipal: loan.originalPrincipal || loan.amount || 0,
        currentPrincipal: loan.currentPrincipal || loan.balance || loan.amount || 0,
        interestRate: loan.interestRate || loan.rate || 0,
        emiAmount: loan.emi || loan.monthlyInstallment || 0,
        emiDueDay: loan.emiDueDay || null,
        daysPastDue: loan.daysPastDue || 0,
        status: loan.status || 'ACTIVE',
        meta: { migratedFrom: 'Loan' }
      });
      await acc.save();
      console.log('Migrated loan -> debtAccount:', loan._id);
    } catch (err) {
      console.error('Failed on loan', loan._id, err && err.message);
    }
  }

  console.log('Migration completed');
  process.exit(0);
}

migrate().catch(err => { console.error(err); process.exit(1); });
