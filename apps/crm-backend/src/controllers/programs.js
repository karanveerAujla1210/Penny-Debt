const Program = require('../../models/Program');

const logAction = async (userId, entityType, entityId, action, previousData, newData, req) => {
  try {
    const AuditLog = require('../../models/AuditLog');
    await AuditLog.create({
      userId,
      entityType: entityType.toUpperCase(),
      entityId,
      action: action.toUpperCase(),
      previousData,
      newData,
      ipAddress: req.ip,
      userAgent: req.get('user-agent')
    });
  } catch (e) {
    console.warn('Audit log failed:', e.message);
  }
};

exports.createProgram = async (req, res, next) => {
  try {
    const payload = req.body;
    const program = new Program(payload);
    await program.save();
    // audit
    try { await logAction(req.user && req.user._id, 'program', program._id, 'create', null, program, req); } catch (e) { }

    // recalc totals (best-effort)
    // recalcProgramTotals(program._id).catch(err => {
    //   console.warn('recalcProgramTotals error:', err && err.message);
    // });

    res.status(201).json(program);
  } catch (err) {
    next(err);
  }
};

exports.listPrograms = async (req, res, next) => {
  try {
    const q = req.query || {};
    const limit = Math.min(parseInt(q.limit) || 50, 200);
    const page = Math.max(parseInt(q.page) || 1, 1);
    const skip = (page - 1) * limit;

    const [items, total] = await Promise.all([
      Program.find({}).skip(skip).limit(limit).lean(),
      Program.countDocuments({})
    ]);

    res.json({ items, total, page, limit });
  } catch (err) {
    next(err);
  }
};

exports.getProgram = async (req, res, next) => {
  try {
    const id = req.params.id;
    const program = await Program.findById(id).lean();
    if (!program) return res.status(404).json({ error: 'Program not found' });
    res.json(program);
  } catch (err) {
    next(err);
  }
};

exports.updateProgram = async (req, res, next) => {
  try {
    const id = req.params.id;
    const updates = req.body;
    const before = await Program.findById(id).lean();
    if (!before) return res.status(404).json({ error: 'Program not found' });

    const updated = await Program.findByIdAndUpdate(id, updates, { new: true, runValidators: true }).lean();

    try { await logAction(req.user && req.user._id, 'program', id, 'update', before, updated, req); } catch (e) { }

    // recalcProgramTotals(id).catch(err => {
    //   console.warn('recalcProgramTotals error:', err && err.message);
    // });

    res.json(updated);
  } catch (err) {
    next(err);
  }
};

exports.deleteProgram = async (req, res, next) => {
  try {
    const id = req.params.id;
    const before = await Program.findById(id).lean();
    if (!before) return res.status(404).json({ error: 'Program not found' });

    await Program.findByIdAndDelete(id);

    try { await logAction(req.user && req.user._id, 'program', id, 'delete', before, null, req); } catch (e) { }

    // recalculation not strictly necessary after deletion but run best-effort for any downstream denormalizations
    // recalcProgramTotals(id).catch(() => {});

    res.json({ success: true });
  } catch (err) {
    next(err);
  }
};
