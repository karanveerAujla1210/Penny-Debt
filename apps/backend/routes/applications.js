const express = require('express');
const router = express.Router();
const Application = require('../../models/Application');

// POST - Submit application
router.post('/', async (req, res) => {
  try {
    const application = new Application(req.body);
    await application.save();
    res.status(201).json({ success: true, id: application._id });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

// GET - Get all applications
router.get('/', async (req, res) => {
  try {
    const applications = await Application.find().sort({ createdAt: -1 });
    res.json(applications);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
