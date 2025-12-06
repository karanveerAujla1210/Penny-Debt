const express = require('express');
const router = express.Router();

let DocumentModel;
try { DocumentModel = require('../../../models-website/Document'); } catch (e) { DocumentModel = null; }

router.get('/', async (req, res) => {
  try {
    const list = DocumentModel ? await DocumentModel.find().sort({ createdAt: -1 }).limit(200) : [];
    res.json({ ok: true, items: list });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
const oldDocumentsRoute = require('../../../routes/documents');
module.exports = oldDocumentsRoute;
