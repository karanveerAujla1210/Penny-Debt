const mongoose = require('mongoose');

const faqSchema = new mongoose.Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true },
  category: { type: String },
  order: { type: Number, default: 0 },
  isActive: { type: Boolean, default: true }
});

module.exports = mongoose.model('FAQ', faqSchema);
