const express = require('express');
const router = express.Router();
const Document = require('../models-website/Document');

// Get all documents
router.get('/', async (req, res) => {
  try {
    const documents = await Document.find()
      .populate('customer', 'fullName')
      .populate('case', 'caseNumber')
      .populate('uploadedBy', 'name')
      .populate('verifiedBy', 'name');
    res.json(documents);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get documents by customer
router.get('/customer/:customerId', async (req, res) => {
  try {
    const documents = await Document.find({ customer: req.params.customerId });
    res.json(documents);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get documents by case
router.get('/case/:caseId', async (req, res) => {
  try {
    const documents = await Document.find({ case: req.params.caseId });
    res.json(documents);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Upload document
router.post('/', async (req, res) => {
  try {
    const document = new Document(req.body);
    await document.save();
    res.status(201).json(document);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Verify document
router.patch('/:id/verify', async (req, res) => {
  try {
    const document = await Document.findByIdAndUpdate(
      req.params.id,
      {
        verificationStatus: req.body.status,
        verifiedBy: req.body.verifiedBy,
        verifiedAt: new Date(),
        notes: req.body.notes
      },
      { new: true }
    );
    if (!document) return res.status(404).json({ error: 'Document not found' });
    res.json(document);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
