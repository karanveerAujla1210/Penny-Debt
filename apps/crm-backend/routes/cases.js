const express = require('express');
const router = express.Router();
const Case = require('../models-website/Case');

// Get all cases
router.get('/', async (req, res) => {
  try {
    const cases = await Case.find()
      .populate('customer', 'fullName email phone')
      .populate('assignedTo', 'name email role');
    res.json(cases);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get case by ID
router.get('/:id', async (req, res) => {
  try {
    const caseData = await Case.findById(req.params.id)
      .populate('customer')
      .populate('assignedTo')
      .populate('notes.addedBy', 'name');
    if (!caseData) return res.status(404).json({ error: 'Case not found' });
    res.json(caseData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create case
router.post('/', async (req, res) => {
  try {
    const caseData = new Case(req.body);
    await caseData.save();
    res.status(201).json(caseData);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update case
router.put('/:id', async (req, res) => {
  try {
    const caseData = await Case.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!caseData) return res.status(404).json({ error: 'Case not found' });
    res.json(caseData);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Add note to case
router.post('/:id/notes', async (req, res) => {
  try {
    const caseData = await Case.findById(req.params.id);
    if (!caseData) return res.status(404).json({ error: 'Case not found' });
    caseData.notes.push(req.body);
    await caseData.save();
    res.json(caseData);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
