const express = require('express');
const router = express.Router();
const DebtCase = require('../models/DebtCase');

// Get all cases
router.get('/', async (req, res) => {
  try {
    const { status, page = 1, limit = 50 } = req.query;
    const query = status ? { status } : {};
    
    const cases = await DebtCase.find(query)
      .populate('client', 'fullName email phone')
      .populate('assignedTo', 'name email role')
      .sort({ createdAt: -1 })
      .limit(parseInt(limit))
      .skip((parseInt(page) - 1) * parseInt(limit));
    
    res.json(cases);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get case by ID or Case ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    let caseData;
    
    // Check if it's a Case ID (PD-YYYY-XXXXX format) or MongoDB ID
    if (id.startsWith('PD-')) {
      caseData = await DebtCase.findOne({ caseId: id })
        .populate('client')
        .populate('assignedTo')
        .populate('notes.createdBy', 'name');
    } else {
      caseData = await DebtCase.findById(id)
        .populate('client')
        .populate('assignedTo')
        .populate('notes.createdBy', 'name');
    }
    
    if (!caseData) return res.status(404).json({ error: 'Case not found' });
    res.json(caseData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create case
router.post('/', async (req, res) => {
  try {
    const caseData = new DebtCase(req.body);
    await caseData.save();
    res.status(201).json({
      message: 'Case created successfully',
      caseId: caseData.caseId,
      case: caseData
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update case
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    let caseData;
    
    if (id.startsWith('PD-')) {
      caseData = await DebtCase.findOneAndUpdate(
        { caseId: id },
        { ...req.body, updatedAt: Date.now() },
        { new: true }
      );
    } else {
      caseData = await DebtCase.findByIdAndUpdate(
        id,
        { ...req.body, updatedAt: Date.now() },
        { new: true }
      );
    }
    
    if (!caseData) return res.status(404).json({ error: 'Case not found' });
    res.json(caseData);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Add note to case
router.post('/:id/notes', async (req, res) => {
  try {
    const { id } = req.params;
    let caseData;
    
    if (id.startsWith('PD-')) {
      caseData = await DebtCase.findOne({ caseId: id });
    } else {
      caseData = await DebtCase.findById(id);
    }
    
    if (!caseData) return res.status(404).json({ error: 'Case not found' });
    caseData.notes.push(req.body);
    await caseData.save();
    res.json(caseData);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get case by Case ID (search)
router.get('/search/:caseId', async (req, res) => {
  try {
    const caseData = await DebtCase.findOne({ caseId: req.params.caseId })
      .populate('client')
      .populate('assignedTo');
    if (!caseData) return res.status(404).json({ error: 'Case not found' });
    res.json(caseData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
