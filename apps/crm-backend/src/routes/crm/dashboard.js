const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');

router.get('/', async (req, res) => {
  try {
    // Basic dashboard summary
    const connState = mongoose.connection.readyState === 1;
    res.json({ ok: true, name: 'crm-dashboard', mongodbConnected: connState, timestamp: new Date().toISOString() });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
const oldCrmDashboardRoute = require('../../../routes/crm/dashboard');
module.exports = oldCrmDashboardRoute;
