const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  features: [{ type: String }],
  icon: { type: String },
  isActive: { type: Boolean, default: true }
});

module.exports = mongoose.model('Service', serviceSchema);
