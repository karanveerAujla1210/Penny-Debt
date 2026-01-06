const express = require('express');
const router = express.Router();
const Lead = require('../../../models/Lead');
const { checkPermission, logAction } = require('../../../middleware/rbac');
const { createLead, updateLead } = require('../../validators/leads');
const { validationResult } = require('express-validator');

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }
  next();
};

router.post('/', checkPermission('create:lead'), createLead, validate, async (req, res) => {
  try {
    const lead = new Lead({ ...req.body, counsellorId: req.user._id });
    await lead.save();
    await logAction(req.user._id, 'LEAD', lead._id, 'CREATE', null, lead.toObject(), req);
    res.status(201).json(lead);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

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

router.patch('/:id', checkPermission('update:lead'), updateLead, validate, async (req, res) => {
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
