const express = require('express');
const router = express.Router();
const Service = require('../models-website/Service');

router.get('/', async (req, res) => {
  try {
    const services = await Service.find({ isActive: true });
    res.json(services);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    res.json(service);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
