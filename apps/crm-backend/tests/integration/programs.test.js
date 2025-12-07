const request = require('supertest');
const express = require('express');
const app = require('../../src/app');

function makeTestApp() {
  const a = express();
  a.use((req, res, next) => {
    req.user = { _id: '000000000000000000000000', roles: ['Admin'] };
    next();
  });
  a.use(app);
  return a;
}

describe('Programs integration', () => {
  const testApp = makeTestApp();

  test('create program and list', async () => {
    const createRes = await request(testApp)
      .post('/api/v1/crm/programs')
      .send({ caseId: 'case-1', status: 'ACTIVE', loans: [] })
      .set('Accept', 'application/json');

    expect(createRes.status).toBe(201);
    const program = createRes.body;
    expect(program).toHaveProperty('_id');

    const listRes = await request(testApp)
      .get('/api/v1/crm/programs')
      .set('Accept', 'application/json');

    expect(listRes.status).toBe(200);
    expect(Array.isArray(listRes.body)).toBe(true);
    const found = listRes.body.find((p) => p._id === program._id);
    expect(found).toBeTruthy();
  });
});
