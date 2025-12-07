const express = require('express');
const router = express.Router();
const { Program } = require('../../models');
const { checkPermission, logAction } = require('../../../middleware/rbac');
const { validateRequest } = require('../../../middleware/validate');
const validators = require('../../../validators/programs');

// Create program
router.post('/', checkPermission('create:program'), validators.createProgram, validateRequest, async (req, res) => {
  try {
    const program = new Program({
      ...req.body,
      createdBy: req.user && req.user._id
    });
    await program.save();
    await logAction(req.user && req.user._id, 'PROGRAM', program._id, 'CREATE', null, program.toObject(), req);
    res.status(201).json(program);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get programs
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

// Update program
router.patch('/:id', checkPermission('update:program'), validators.updateProgram, validateRequest, async (req, res) => {
  try {
    const program = await Program.findById(req.params.id);
    if (!program) return res.status(404).json({ error: 'Program not found' });
    const previousData = program.toObject();
    Object.assign(program, req.body);
    program.updatedAt = Date.now();
    await program.save();
    await logAction(req.user && req.user._id, 'PROGRAM', program._id, 'UPDATE', previousData, program.toObject(), req);
    res.json(program);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
