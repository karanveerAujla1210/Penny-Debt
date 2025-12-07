const express = require('express');
const router = express.Router();
const { Case, Customer, Loan } = require('../../models');
const { checkPermission, logAction } = require('../../../middleware/rbac');

// Create case
router.post('/', checkPermission('create:case'), async (req, res) => {
  try {
    const caseData = new Case({
      ...req.body,
      advisorId: req.user._id
    });
    await caseData.save();
    
    await logAction(req.user._id, 'CASE', caseData._id, 'CREATE', null, caseData.toObject(), req);
    
    res.status(201).json(caseData);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all cases
router.get('/', checkPermission('view:lead'), async (req, res) => {
  try {
    const { status, advisorId } = req.query;
    const filter = {};
    
    if (status) filter.status = status;
    if (advisorId) filter.advisorId = advisorId;
    
    const cases = await Case.find(filter)
      .populate('customerId')
      .populate('advisorId', 'email')
      .sort({ createdAt: -1 });
    
    res.json(cases);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get case with loans
router.get('/:id', checkPermission('view:lead'), async (req, res) => {
  try {
    const caseData = await Case.findById(req.params.id)
      .populate('customerId')
      .populate('advisorId', 'email');
    
    if (!caseData) return res.status(404).json({ error: 'Case not found' });
    
    const loans = await Loan.find({ caseId: caseData._id });
    
    res.json({ ...caseData.toObject(), loans });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update case
router.patch('/:id', checkPermission('update:case'), async (req, res) => {
  try {
    const caseData = await Case.findById(req.params.id);
    if (!caseData) return res.status(404).json({ error: 'Case not found' });
    
    const previousData = caseData.toObject();
    Object.assign(caseData, req.body);
    caseData.updatedAt = Date.now();
    await caseData.save();
    
    await logAction(req.user._id, 'CASE', caseData._id, 'UPDATE', previousData, caseData.toObject(), req);
    
    res.json(caseData);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
