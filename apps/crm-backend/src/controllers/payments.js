const Payment = require('../../models/Payment');

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

exports.createPayment = async (req, res, next) => {
  try {
    const payload = req.body;
    const payment = new Payment(payload);
    await payment.save();
    // audit log the creation
    try { await logAction(req.user && req.user._id, 'payment', payment._id, 'create', null, payment, req); } catch (e) { /* swallow */ }

    // reconcile loan totals (best-effort)
    // if (payment.loanId) {
    //   reconcilePaymentsForLoan(payment.loanId).catch(err => {
    //     console.warn('reconcilePaymentsForLoan error:', err && err.message);
    //   });
    // }

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
    const before = await Payment.findById(id).lean();
    if (!before) return res.status(404).json({ error: 'Payment not found' });

    const updated = await Payment.findByIdAndUpdate(id, updates, { new: true, runValidators: true }).lean();

    // audit log
    try { await logAction(req.user && req.user._id, 'payment', id, 'update', before, updated, req); } catch (e) { /* swallow */ }

    // if loanId present either before or after, trigger reconciliation
    // const loanId = (updated && updated.loanId) || (before && before.loanId);
    // if (loanId) {
    //   reconcilePaymentsForLoan(loanId).catch(err => {
    //     console.warn('reconcilePaymentsForLoan error:', err && err.message);
    //   });
    // }

    res.json(updated);
  } catch (err) {
    next(err);
  }
};

exports.deletePayment = async (req, res, next) => {
  try {
    const id = req.params.id;
    const before = await Payment.findById(id).lean();
    if (!before) return res.status(404).json({ error: 'Payment not found' });

    await Payment.findByIdAndDelete(id);

    // audit log deletion
    try { await logAction(req.user && req.user._id, 'payment', id, 'delete', before, null, req); } catch (e) { /* swallow */ }

    // reconcile loan totals if loanId existed
    // if (before && before.loanId) {
    //   reconcilePaymentsForLoan(before.loanId).catch(err => {
    //     console.warn('reconcilePaymentsForLoan error:', err && err.message);
    //   });
    // }

    res.json({ success: true });
  } catch (err) {
    next(err);
  }
};
