const express = require('express');
const router = express.Router();
const Settlement = require('../../../models/Settlement');
const { checkPermission, logAction } = require('../../../middleware/rbac');

// Create settlement
router.post('/', checkPermission('create:settlement'), async (req, res) => {
  try {
    const settlement = new Settlement({
      ...req.body,
      negotiatorId: req.user._id
    });
    await settlement.save();
    
    await logAction(req.user._id, 'SETTLEMENT', settlement._id, 'CREATE', null, settlement.toObject(), req);
    
    res.status(201).json(settlement);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get settlements
router.get('/', checkPermission('view:lead'), async (req, res) => {
  try {
    const { status, programId } = req.query;
    const filter = {};
    
    if (status) filter.status = status;
    if (programId) filter.programId = programId;
    
    const settlements = await Settlement.find(filter)
      .populate('loanId')
      .populate('negotiatorId', 'email')
      .sort({ createdAt: -1 });
    
    res.json(settlements);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update settlement
router.patch('/:id', checkPermission('update:settlement'), async (req, res) => {
  try {
    const settlement = await Settlement.findById(req.params.id);
    if (!settlement) return res.status(404).json({ error: 'Settlement not found' });
    
    const previousData = settlement.toObject();
    Object.assign(settlement, req.body);
    settlement.updatedAt = Date.now();
    await settlement.save();
    
    await logAction(req.user._id, 'SETTLEMENT', settlement._id, 'UPDATE', previousData, settlement.toObject(), req);
    
    res.json(settlement);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Customer approval
router.post('/:id/approve', async (req, res) => {
  try {
    const settlement = await Settlement.findById(req.params.id);
    if (!settlement) return res.status(404).json({ error: 'Settlement not found' });
    
    settlement.customerDecision = 'APPROVED';
    settlement.customerDecidedAt = Date.now();
    settlement.status = 'APPROVED_BY_CUSTOMER';
    await settlement.save();
    
    res.json(settlement);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
