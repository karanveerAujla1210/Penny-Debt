// Template migration script: rename/migrate fields from Loan -> DebtAccount
// Usage: NODE_ENV=staging MONGODB_URI=<uri> node 0001_migrate_loans_to_debt_accounts.template.js --dry-run

const mongoose = require('mongoose');
const argv = require('minimist')(process.argv.slice(2));

async function main() {
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error('MONGODB_URI required');
  await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  console.log('Connected to', uri);

  // require canonical models
  const { Loan, DebtAccount } = require('../../src/models');

  const batchSize = 200;
  let lastId = null;
  let migrated = 0;

  while (true) {
    const q = lastId ? { _id: { $gt: lastId } } : {};
    const docs = await Loan.find(q).sort({ _id: 1 }).limit(batchSize).lean();
    if (!docs.length) break;

    for (const d of docs) {
      lastId = d._id;
      // compute transformation
      const debt = {
        originalLoanId: d._id,
        customerId: d.customerId,
        balance: d.details && d.details.currentOutstanding || d.principal,
        meta: { migratedFromLoan: true }
      };

      if (!argv['dry-run']) {
        await DebtAccount.updateOne({ originalLoanId: d._id }, { $set: debt }, { upsert: true });
      }
      migrated++;
    }

    console.log('Processed', migrated, 'records');
  }

  console.log('Migration finished. total migrated:', migrated);
  await mongoose.disconnect();
}

main().catch(err => { console.error(err); process.exit(1); });
