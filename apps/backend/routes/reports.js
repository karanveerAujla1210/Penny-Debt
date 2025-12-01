const express = require('express');
const router = express.Router();
const Report = require('../models-website/Report');

// Get all reports
router.get('/', async (req, res) => {
  try {
    const reports = await Report.find().populate('generatedBy', 'name email');
    res.json(reports);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get report by ID
router.get('/:id', async (req, res) => {
  try {
    const report = await Report.findById(req.params.id).populate('generatedBy');
    if (!report) return res.status(404).json({ error: 'Report not found' });
    res.json(report);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create report
router.post('/', async (req, res) => {
  try {
    const report = new Report(req.body);
    await report.save();
    res.status(201).json(report);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update report
router.put('/:id', async (req, res) => {
  try {
    const report = await Report.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!report) return res.status(404).json({ error: 'Report not found' });
    res.json(report);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
