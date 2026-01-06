const express = require('express');
const router = express.Router();
const Loan = require('../../../models/Loan');
const { checkPermission, logAction } = require('../../../middleware/rbac');
const { createLoan, updateLoan } = require('../../validators/loans');
const { validationResult } = require('express-validator');

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }
  next();
};

router.post('/', checkPermission('create:loan'), createLoan, validate, async (req, res) => {
  try {
    const loan = new Loan(req.body);
    await loan.save();
    await logAction(req.user._id, 'LOAN', loan._id, 'CREATE', null, loan.toObject(), req);
    res.status(201).json(loan);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/case/:caseId', checkPermission('view:loan'), async (req, res) => {
  try {
    const loans = await Loan.find({ caseId: req.params.caseId });
    res.json(loans);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.patch('/:id', checkPermission('update:loan'), updateLoan, validate, async (req, res) => {
  try {
    const loan = await Loan.findById(req.params.id);
    if (!loan) return res.status(404).json({ error: 'Loan not found' });
    
    const previousData = loan.toObject();
    Object.assign(loan, req.body);
    loan.updatedAt = Date.now();
    await loan.save();
    
    await logAction(req.user._id, 'LOAN', loan._id, 'UPDATE', previousData, loan.toObject(), req);
    res.json(loan);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
