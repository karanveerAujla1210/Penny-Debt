const express = require('express');
const router = express.Router();

let CaseModel;
try { CaseModel = require('../../../models-website/Case'); } catch (e) { CaseModel = null; }

router.get('/', async (req, res) => {
  try {
    const list = CaseModel ? await CaseModel.find().sort({ createdAt: -1 }).limit(200) : [];
    res.json({ ok: true, items: list });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
const oldCasesRoute = require('../../../routes/cases');
module.exports = oldCasesRoute;
