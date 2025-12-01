const express = require('express');
const router = express.Router();
const Testimonial = require('../models-website/Testimonial');

router.get('/', async (req, res) => {
  try {
    const testimonials = await Testimonial.find({ isActive: true }).limit(10);
    res.json(testimonials);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
