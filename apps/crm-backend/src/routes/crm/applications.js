const express = require('express');
const router = express.Router();

let Application;
try { Application = require('../../../models-website/Application'); } catch (e) { Application = null; }

router.get('/', async (req, res) => {
  try {
    const list = Application ? await Application.find().sort({ createdAt: -1 }).limit(200) : [];
    res.json({ ok: true, items: list });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
const oldApplicationsRoute = require('../../../routes/applications');
module.exports = oldApplicationsRoute;
