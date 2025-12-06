const express = require('express');
const router = express.Router();

let Customer;
try { Customer = require('../../../models-website/Customer'); } catch (e) { Customer = null; }

router.get('/', async (req, res) => {
  try {
    const list = Customer ? await Customer.find().sort({ createdAt: -1 }).limit(200) : [];
    res.json({ ok: true, items: list });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
const oldCustomersRoute = require('../../../routes/customers');
module.exports = oldCustomersRoute;
