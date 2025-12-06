const express = require('express');
const router = express.Router();

let Report;
try { Report = require('../../../models-website/Report'); } catch (e) { Report = null; }

router.get('/', async (req, res) => {
  try {
    const list = Report ? await Report.find().sort({ createdAt: -1 }).limit(50) : [];
    res.json({ ok: true, items: list });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
const oldReportsRoute = require('../../../routes/reports');
module.exports = oldReportsRoute;
