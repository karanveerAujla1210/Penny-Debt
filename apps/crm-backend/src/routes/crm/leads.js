const express = require('express');
const router = express.Router();
const { Lead, Customer } = require('../../models');
const { checkPermission, logAction } = require('../../../middleware/rbac');

// Create lead
router.post('/', checkPermission('create:lead'), async (req, res) => {
  try {
    const lead = new Lead({
      ...req.body,
      counsellorId: req.user._id
    });
    await lead.save();
    
    await logAction(req.user._id, 'LEAD', lead._id, 'CREATE', null, lead.toObject(), req);
    
    res.status(201).json(lead);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all leads
router.get('/', checkPermission('view:lead'), async (req, res) => {
  try {
    const { status, counsellorId } = req.query;
    const filter = {};
    
    if (status) filter.status = status;
    if (counsellorId) filter.counsellorId = counsellorId;
    
    const leads = await Lead.find(filter)
      .populate('counsellorId', 'email')
      .populate('assignedAdvisor', 'email')
      .sort({ createdAt: -1 });
    
    res.json(leads);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update lead
router.patch('/:id', checkPermission('update:lead'), async (req, res) => {
  try {
    const lead = await Lead.findById(req.params.id);
    if (!lead) return res.status(404).json({ error: 'Lead not found' });
    
    const previousData = lead.toObject();
    Object.assign(lead, req.body);
    lead.updatedAt = Date.now();
    await lead.save();
    
    await logAction(req.user._id, 'LEAD', lead._id, 'UPDATE', previousData, lead.toObject(), req);
    
    res.json(lead);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Assign to advisor
router.post('/:id/assign', checkPermission('update:lead'), async (req, res) => {
  try {
    const lead = await Lead.findById(req.params.id);
    if (!lead) return res.status(404).json({ error: 'Lead not found' });
    
    lead.assignedAdvisor = req.body.advisorId;
    lead.status = 'CONVERTED';
    await lead.save();
    
    res.json(lead);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
