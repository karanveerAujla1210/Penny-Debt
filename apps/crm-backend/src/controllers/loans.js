const Loan = require('../models/loan');

exports.createLoan = async (req, res, next) => {
  try {
    const payload = req.body;
    const loan = new Loan(payload);
    await loan.save();
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
    const loan = await Loan.findByIdAndUpdate(id, updates, { new: true, runValidators: true }).lean();
    if (!loan) return res.status(404).json({ error: 'Loan not found' });
    res.json(loan);
  } catch (err) {
    next(err);
  }
};

exports.deleteLoan = async (req, res, next) => {
  try {
    const id = req.params.id;
    const removed = await Loan.findByIdAndDelete(id).lean();
    if (!removed) return res.status(404).json({ error: 'Loan not found' });
    res.json({ success: true });
  } catch (err) {
    next(err);
  }
};
