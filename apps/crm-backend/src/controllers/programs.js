const Program = require('../models/program');

exports.createProgram = async (req, res, next) => {
  try {
    const payload = req.body;
    const program = new Program(payload);
    await program.save();
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
    const program = await Program.findByIdAndUpdate(id, updates, { new: true, runValidators: true }).lean();
    if (!program) return res.status(404).json({ error: 'Program not found' });
    res.json(program);
  } catch (err) {
    next(err);
  }
};

exports.deleteProgram = async (req, res, next) => {
  try {
    const id = req.params.id;
    const removed = await Program.findByIdAndDelete(id).lean();
    if (!removed) return res.status(404).json({ error: 'Program not found' });
    res.json({ success: true });
  } catch (err) {
    next(err);
  }
};
