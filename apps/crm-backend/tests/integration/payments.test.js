const request = require('supertest');
const express = require('express');
const app = require('../../src/app');

// Wrap the existing app so we can inject req.user before routes
function makeTestApp() {
  const a = express();
  a.use((req, res, next) => {
    // inject a user with Admin role to bypass RBAC
    req.user = { _id: '000000000000000000000000', roles: ['Admin'] };
    next();
  });
  a.use(app);
  return a;
}

let server;

describe('Payments integration', () => {
  const testApp = makeTestApp();

  test('create loan -> create payment -> fetch payment', async () => {
    // create a loan first
    const loanRes = await request(testApp)
      .post('/api/v1/crm/loans')
      .send({ customerId: 'cust-1', principal: 1000 })
      .set('Accept', 'application/json');

    expect(loanRes.status).toBe(201);
    const loan = loanRes.body;
    expect(loan).toHaveProperty('_id');

    // create payment
    const payRes = await request(testApp)
      .post('/api/v1/crm/payments')
      .send({ loanId: loan._id, amount: 100, method: 'bank' })
      .set('Accept', 'application/json');

    expect(payRes.status).toBe(201);
    const payment = payRes.body;
    expect(payment).toHaveProperty('_id');
    expect(payment.loanId).toBe(loan._id);

    // fetch payment
    const getRes = await request(testApp)
      .get(`/api/v1/crm/payments/${payment._id}`)
      .set('Accept', 'application/json');

    expect(getRes.status).toBe(200);
    expect(getRes.body).toHaveProperty('_id', payment._id);
  });
});
