const { Ticket } = require('../models');

exports.createTicket = async (req, res, next) => {
  try {
    const payload = req.body;
    const ticket = new Ticket(payload);
    await ticket.save();
    res.status(201).json(ticket);
  } catch (err) {
    next(err);
  }
};

exports.listTickets = async (req, res, next) => {
  try {
    const q = req.query || {};
    const limit = Math.min(parseInt(q.limit) || 50, 200);
    const page = Math.max(parseInt(q.page) || 1, 1);
    const skip = (page - 1) * limit;

    const [items, total] = await Promise.all([
      Ticket.find({}).skip(skip).limit(limit).lean(),
      Ticket.countDocuments({})
    ]);

    res.json({ items, total, page, limit });
  } catch (err) {
    next(err);
  }
};

exports.getTicket = async (req, res, next) => {
  try {
    const id = req.params.id;
    const ticket = await Ticket.findById(id).lean();
    if (!ticket) return res.status(404).json({ error: 'Ticket not found' });
    res.json(ticket);
  } catch (err) {
    next(err);
  }
};

exports.updateTicket = async (req, res, next) => {
  try {
    const id = req.params.id;
    const updates = req.body;
    const ticket = await Ticket.findByIdAndUpdate(id, updates, { new: true, runValidators: true }).lean();
    if (!ticket) return res.status(404).json({ error: 'Ticket not found' });
    res.json(ticket);
  } catch (err) {
    next(err);
  }
};

exports.deleteTicket = async (req, res, next) => {
  try {
    const id = req.params.id;
    const removed = await Ticket.findByIdAndDelete(id).lean();
    if (!removed) return res.status(404).json({ error: 'Ticket not found' });
    res.json({ success: true });
  } catch (err) {
    next(err);
  }
};
