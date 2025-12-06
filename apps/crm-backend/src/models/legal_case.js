const mongoose = require('mongoose');

const LegalCaseSchema = new mongoose.Schema({
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
  caseType: String,
  status: String,
  advocateAssigned: String,
  nextActionDate: Date,
  notes: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('LegalCase', LegalCaseSchema);
