const express = require('express');
const router = express.Router();

let Lead;
try { Lead = require('../../../models-website/Lead'); } catch (e) { Lead = null; }

router.get('/', async (req, res) => {
  try {
    const list = Lead ? await Lead.find().sort({ createdAt: -1 }).limit(100) : [];
    res.json({ ok: true, items: list });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
const oldLeadsRoute = require('../../../routes/leads');
module.exports = oldLeadsRoute;
