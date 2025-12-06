const express = require('express');
const router = express.Router();

let Payment;
try { Payment = require('../../../models-website/Payment'); } catch (e) { Payment = null; }

router.get('/', async (req, res) => {
  try {
    const list = Payment ? await Payment.find().sort({ createdAt: -1 }).limit(200) : [];
    res.json({ ok: true, items: list });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
const oldPaymentsRoute = require('../../../routes/payments');
module.exports = oldPaymentsRoute;
