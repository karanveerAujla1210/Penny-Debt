const express = require('express');
const router = express.Router();
const Ticket = require('../../../models/Ticket');
const { checkPermission } = require('../../../middleware/rbac');
const { createTicket, updateTicket } = require('../../validators/tickets');
const { validationResult } = require('express-validator');

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }
  next();
};

router.post('/', checkPermission('create:ticket'), createTicket, validate, async (req, res) => {
  try {
    const ticket = new Ticket(req.body);
    await ticket.save();
    res.status(201).json(ticket);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/', checkPermission('view:ticket'), async (req, res) => {
  try {
    const { status, type, customerId } = req.query;
    const filter = {};
    if (status) filter.status = status;
    if (type) filter.type = type;
    if (customerId) filter.customerId = customerId;
    
    const tickets = await Ticket.find(filter)
      .populate('customerId', 'basic.fullName')
      .populate('assignedTo', 'email')
      .sort({ createdAt: -1 });
    
    res.json(tickets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/:id', checkPermission('view:ticket'), async (req, res) => {
  try {
    const ticket = await Ticket.findById(req.params.id)
      .populate('customerId')
      .populate('assignedTo', 'email');
    if (!ticket) return res.status(404).json({ error: 'Ticket not found' });
    res.json(ticket);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.patch('/:id', checkPermission('update:ticket'), updateTicket, validate, async (req, res) => {
  try {
    const ticket = await Ticket.findByIdAndUpdate(
      req.params.id,
      { ...req.body, updatedAt: Date.now() },
      { new: true, runValidators: true }
    );
    if (!ticket) return res.status(404).json({ error: 'Ticket not found' });
    res.json(ticket);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
