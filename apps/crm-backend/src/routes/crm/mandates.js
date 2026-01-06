const express = require('express');
const router = express.Router();
const Mandate = require('../../../models/Mandate');
const { checkPermission } = require('../../../middleware/rbac');
const { body, param, validationResult } = require('express-validator');

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }
  next();
};

const createMandateValidator = [
  body('customerId').isMongoId().withMessage('Invalid customer ID'),
  body('programId').isMongoId().withMessage('Invalid program ID'),
  body('bank.name').notEmpty().withMessage('Bank name required'),
  body('bank.accountNumber').notEmpty().withMessage('Account number required'),
  body('bank.ifsc').matches(/^[A-Z]{4}0[A-Z0-9]{6}$/).withMessage('Invalid IFSC code'),
  body('mandateType').isIn(['NACH', 'E_NACH', 'UPI_AUTOPAY', 'CARD_AUTO_DEBIT']).withMessage('Invalid mandate type')
];

const updateMandateValidator = [
  param('id').isMongoId().withMessage('Invalid mandate ID'),
  body('status').optional().isIn(['NOT_SENT', 'SENT', 'APPROVED', 'FAILED', 'CANCELLED']).withMessage('Invalid status')
];

router.post('/', checkPermission('create:mandate'), createMandateValidator, validate, async (req, res) => {
  try {
    const mandate = new Mandate(req.body);
    await mandate.save();
    res.status(201).json(mandate);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/', checkPermission('view:mandate'), async (req, res) => {
  try {
    const { customerId, programId, status } = req.query;
    const filter = {};
    if (customerId) filter.customerId = customerId;
    if (programId) filter.programId = programId;
    if (status) filter.status = status;
    
    const mandates = await Mandate.find(filter)
      .populate('customerId', 'basic.fullName')
      .populate('programId', 'config.sipAmount')
      .sort({ createdAt: -1 });
    
    res.json(mandates);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.patch('/:id', checkPermission('update:mandate'), updateMandateValidator, validate, async (req, res) => {
  try {
    const mandate = await Mandate.findByIdAndUpdate(
      req.params.id,
      { ...req.body, updatedAt: Date.now() },
      { new: true, runValidators: true }
    );
    if (!mandate) return res.status(404).json({ error: 'Mandate not found' });
    res.json(mandate);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
