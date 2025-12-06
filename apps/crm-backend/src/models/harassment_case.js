const mongoose = require('mongoose');

const HarassmentSchema = new mongoose.Schema({
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
  contactNumbers: [String],
  recordings: [String],
  description: String,
  severity: { type: String, enum: ['MILD','MODERATE','SEVERE'], default: 'MILD' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('HarassmentCase', HarassmentSchema);
