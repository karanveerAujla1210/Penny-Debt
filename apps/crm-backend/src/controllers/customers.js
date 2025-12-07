const Customer = require('../../models/Customer');
const { logAction } = require('../middleware/rbac');

exports.createCustomer = async (req, res, next) => {
  try {
    const payload = req.body;
    const customer = new Customer(payload);
    await customer.save();
    try { await logAction(req.user && req.user._id, 'customer', customer._id, 'create', null, customer, req); } catch (e) { }
    res.status(201).json(customer);
  } catch (err) {
    next(err);
  }
};

exports.listCustomers = async (req, res, next) => {
  try {
    const q = req.query || {};
    const limit = Math.min(parseInt(q.limit) || 50, 200);
    const page = Math.max(parseInt(q.page) || 1, 1);
    const skip = (page - 1) * limit;

    const [items, total] = await Promise.all([
      Customer.find({}).skip(skip).limit(limit).lean(),
      Customer.countDocuments({})
    ]);

    res.json({ items, total, page, limit });
  } catch (err) {
    next(err);
  }
};

exports.getCustomer = async (req, res, next) => {
  try {
    const id = req.params.id;
    const customer = await Customer.findById(id).lean();
    if (!customer) return res.status(404).json({ error: 'Customer not found' });
    res.json(customer);
  } catch (err) {
    next(err);
  }
};

exports.updateCustomer = async (req, res, next) => {
  try {
    const id = req.params.id;
    const updates = req.body;
    const before = await Customer.findById(id).lean();
    if (!before) return res.status(404).json({ error: 'Customer not found' });

    const updated = await Customer.findByIdAndUpdate(id, updates, { new: true, runValidators: true }).lean();
    try { await logAction(req.user && req.user._id, 'customer', id, 'update', before, updated, req); } catch (e) { }
    res.json(updated);
  } catch (err) {
    next(err);
  }
};

exports.deleteCustomer = async (req, res, next) => {
  try {
    const id = req.params.id;
    const before = await Customer.findById(id).lean();
    if (!before) return res.status(404).json({ error: 'Customer not found' });

    await Customer.findByIdAndDelete(id);
    try { await logAction(req.user && req.user._id, 'customer', id, 'delete', before, null, req); } catch (e) { }
    res.json({ success: true });
  } catch (err) {
    next(err);
  }
};
