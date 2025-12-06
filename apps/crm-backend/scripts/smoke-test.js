/**
 * Simple smoke test for core endpoints using global fetch (Node 18+).
 * Usage: node scripts/smoke-test.js
 */
require('dotenv').config();
const base = process.env.BASE_URL || 'http://localhost:5000';

async function run() {
  console.log('Smoke test base:', base);
  const headers = { 'Content-Type': 'application/json' };

  // Create customer
  let res = await fetch(`${base}/api/v1/crm/customers`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ name: 'Smoke Test', email: 'smoke@example.com' })
  });
  console.log('Create customer status', res.status);
  const customer = await res.json();

  // Create loan
  res = await fetch(`${base}/api/v1/crm/loans`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ customerId: customer._id, principal: 1000 })
  });
  console.log('Create loan status', res.status);
  const loan = await res.json();

  // Create program
  res = await fetch(`${base}/api/v1/crm/programs`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ caseId: null, loans: [{ loanId: loan._id, amount: loan.principal }] })
  });
  console.log('Create program status', res.status);
  const program = await res.json();

  console.log({ customer: customer._id, loan: loan._id, program: program._id });
}

run().catch(err => { console.error(err); process.exit(1); });
