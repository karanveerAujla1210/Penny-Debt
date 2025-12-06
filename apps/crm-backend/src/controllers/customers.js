const Customer = require('../models/customer');

exports.createCustomer = async (req, res, next) => {
  try {
    const payload = req.body;
    const customer = new Customer(payload);
    await customer.save();
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
    const customer = await Customer.findByIdAndUpdate(id, updates, { new: true, runValidators: true }).lean();
    if (!customer) return res.status(404).json({ error: 'Customer not found' });
    res.json(customer);
  } catch (err) {
    next(err);
  }
};

exports.deleteCustomer = async (req, res, next) => {
  try {
    const id = req.params.id;
    const removed = await Customer.findByIdAndDelete(id).lean();
    if (!removed) return res.status(404).json({ error: 'Customer not found' });
    res.json({ success: true });
  } catch (err) {
    next(err);
  }
};
