const express = require('express');
const router = express.Router();
const FAQ = require('../../models/FAQ');

router.get('/', async (req, res) => {
  try {
    const faqs = await FAQ.find({ isActive: true }).sort({ order: 1 });
    res.json(faqs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
