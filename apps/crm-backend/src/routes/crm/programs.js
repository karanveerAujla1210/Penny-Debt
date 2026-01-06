const express = require('express');
const router = express.Router();
const Program = require('../../../models/Program');
const { checkPermission, logAction } = require('../../../middleware/rbac');
const { createProgram, updateProgram } = require('../../validators/programs');
const { validationResult } = require('express-validator');

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }
  next();
};

router.post('/', checkPermission('create:program'), createProgram, validate, async (req, res) => {
  try {
    const program = new Program({ ...req.body, createdBy: req.user._id });
    await program.save();
    await logAction(req.user._id, 'PROGRAM', program._id, 'CREATE', null, program.toObject(), req);
    res.status(201).json(program);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/', checkPermission('view:program'), async (req, res) => {
  try {
    const { status, caseId } = req.query;
    const filter = {};
    if (status) filter.status = status;
    if (caseId) filter.caseId = caseId;
    
    const programs = await Program.find(filter)
      .populate('caseId')
      .populate('loans.loanId')
      .sort({ createdAt: -1 });
    
    res.json(programs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.patch('/:id', checkPermission('update:program'), updateProgram, validate, async (req, res) => {
  try {
    const program = await Program.findById(req.params.id);
    if (!program) return res.status(404).json({ error: 'Program not found' });
    
    const previousData = program.toObject();
    Object.assign(program, req.body);
    program.updatedAt = Date.now();
    await program.save();
    
    await logAction(req.user._id, 'PROGRAM', program._id, 'UPDATE', previousData, program.toObject(), req);
    res.json(program);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
