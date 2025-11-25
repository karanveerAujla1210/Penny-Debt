const express = require('express');
const Career = require('../models/Career');
const router = express.Router();

// Create career application
router.post('/', async (req, res) => {
  try {
    const career = new Career(req.body);
    await career.save();
    res.status(201).json({ success: true, data: career });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

// Get all career applications
router.get('/', async (req, res) => {
  try {
    const careers = await Career.find().sort({ createdAt: -1 });
    res.json({ success: true, data: careers });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Update career application
router.put('/:id', async (req, res) => {
  try {
    const career = await Career.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!career) {
      return res.status(404).json({ success: false, error: 'Career application not found' });
    }
    res.json({ success: true, data: career });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

module.exports = router;