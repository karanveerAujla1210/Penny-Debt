const express = require('express');
const Customer = require('../models/Customer');
const router = express.Router();

// Create customer
router.post('/', async (req, res) => {
  try {
    const customer = new Customer(req.body);
    await customer.save();
    res.status(201).json({ success: true, data: customer });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

// Get all customers
router.get('/', async (req, res) => {
  try {
    const customers = await Customer.find()
      .populate('assignedAgent', 'name email')
      .sort({ createdAt: -1 });
    res.json({ success: true, data: customers });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Get customer by ID
router.get('/:id', async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id)
      .populate('assignedAgent', 'name email');
    if (!customer) {
      return res.status(404).json({ success: false, error: 'Customer not found' });
    }
    res.json({ success: true, data: customer });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Update customer
router.put('/:id', async (req, res) => {
  try {
    const customer = await Customer.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .populate('assignedAgent', 'name email');
    if (!customer) {
      return res.status(404).json({ success: false, error: 'Customer not found' });
    }
    res.json({ success: true, data: customer });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

module.exports = router;