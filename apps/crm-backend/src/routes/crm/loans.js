const express = require('express');
const router = express.Router();
const { Loan } = require('../../models');
const { checkPermission, logAction } = require('../../../middleware/rbac');
const { validateRequest } = require('../../../middleware/validate');
const validators = require('../../../validators/loans');

// Create loan
router.post('/', checkPermission('create:loan'), validators.createLoan, validateRequest, async (req, res) => {
  try {
    const loan = new Loan(req.body);
    await loan.save();
    await logAction(req.user && req.user._id, 'LOAN', loan._id, 'CREATE', null, loan.toObject(), req);
    res.status(201).json(loan);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get loans by case
router.get('/case/:caseId', checkPermission('view:loan'), async (req, res) => {
  try {
    const loans = await Loan.find({ caseId: req.params.caseId });
    res.json(loans);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update loan
router.patch('/:id', checkPermission('update:loan'), validators.updateLoan, validateRequest, async (req, res) => {
  try {
    const loan = await Loan.findById(req.params.id);
    if (!loan) return res.status(404).json({ error: 'Loan not found' });
    const previousData = loan.toObject();
    Object.assign(loan, req.body);
    loan.updatedAt = Date.now();
    await loan.save();
    await logAction(req.user && req.user._id, 'LOAN', loan._id, 'UPDATE', previousData, loan.toObject(), req);
    res.json(loan);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
