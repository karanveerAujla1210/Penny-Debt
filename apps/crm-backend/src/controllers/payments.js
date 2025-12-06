const Payment = require('../models/payment');

exports.createPayment = async (req, res, next) => {
  try {
    const payload = req.body;
    const payment = new Payment(payload);
    await payment.save();
    res.status(201).json(payment);
  } catch (err) {
    next(err);
  }
};

exports.listPayments = async (req, res, next) => {
  try {
    const q = req.query || {};
    const limit = Math.min(parseInt(q.limit) || 50, 200);
    const page = Math.max(parseInt(q.page) || 1, 1);
    const skip = (page - 1) * limit;

    const [items, total] = await Promise.all([
      Payment.find({}).skip(skip).limit(limit).lean(),
      Payment.countDocuments({})
    ]);

    res.json({ items, total, page, limit });
  } catch (err) {
    next(err);
  }
};

exports.getPayment = async (req, res, next) => {
  try {
    const id = req.params.id;
    const payment = await Payment.findById(id).lean();
    if (!payment) return res.status(404).json({ error: 'Payment not found' });
    res.json(payment);
  } catch (err) {
    next(err);
  }
};

exports.updatePayment = async (req, res, next) => {
  try {
    const id = req.params.id;
    const updates = req.body;
    const payment = await Payment.findByIdAndUpdate(id, updates, { new: true, runValidators: true }).lean();
    if (!payment) return res.status(404).json({ error: 'Payment not found' });
    res.json(payment);
  } catch (err) {
    next(err);
  }
};

exports.deletePayment = async (req, res, next) => {
  try {
    const id = req.params.id;
    const removed = await Payment.findByIdAndDelete(id).lean();
    if (!removed) return res.status(404).json({ error: 'Payment not found' });
    res.json({ success: true });
  } catch (err) {
    next(err);
  }
};
