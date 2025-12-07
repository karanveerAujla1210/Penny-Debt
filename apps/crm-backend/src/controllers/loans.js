const Loan = require('../../models/Loan');
const { logAction } = require('../middleware/rbac');

exports.createLoan = async (req, res, next) => {
  try {
    const payload = req.body;
    const loan = new Loan(payload);
    await loan.save();
    try { await logAction(req.user && req.user._id, 'loan', loan._id, 'create', null, loan, req); } catch (e) { }
    res.status(201).json(loan);
  } catch (err) {
    next(err);
  }
};

exports.listLoans = async (req, res, next) => {
  try {
    const q = req.query || {};
    const limit = Math.min(parseInt(q.limit) || 50, 200);
    const page = Math.max(parseInt(q.page) || 1, 1);
    const skip = (page - 1) * limit;

    const [items, total] = await Promise.all([
      Loan.find({}).skip(skip).limit(limit).lean(),
      Loan.countDocuments({})
    ]);

    res.json({ items, total, page, limit });
  } catch (err) {
    next(err);
  }
};

exports.getLoan = async (req, res, next) => {
  try {
    const id = req.params.id;
    const loan = await Loan.findById(id).lean();
    if (!loan) return res.status(404).json({ error: 'Loan not found' });
    res.json(loan);
  } catch (err) {
    next(err);
  }
};

exports.updateLoan = async (req, res, next) => {
  try {
    const id = req.params.id;
    const updates = req.body;
    const before = await Loan.findById(id).lean();
    if (!before) return res.status(404).json({ error: 'Loan not found' });

    const updated = await Loan.findByIdAndUpdate(id, updates, { new: true, runValidators: true }).lean();
    try { await logAction(req.user && req.user._id, 'loan', id, 'update', before, updated, req); } catch (e) { }
    res.json(updated);
  } catch (err) {
    next(err);
  }
};

exports.deleteLoan = async (req, res, next) => {
  try {
    const id = req.params.id;
    const before = await Loan.findById(id).lean();
    if (!before) return res.status(404).json({ error: 'Loan not found' });

    await Loan.findByIdAndDelete(id);
    try { await logAction(req.user && req.user._id, 'loan', id, 'delete', before, null, req); } catch (e) { }
    res.json({ success: true });
  } catch (err) {
    next(err);
  }
};
