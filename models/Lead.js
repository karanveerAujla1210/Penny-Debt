const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  totalDebt: { type: Number, required: true },
  monthlyIncome: { type: Number, required: true },
  loanType: { type: String, required: true },
  employmentStatus: { type: String, required: true },
  city: { type: String, required: true },
  pincode: { type: String, required: true },
  message: { type: String },
  source: { type: String, default: 'website' },
  status: { type: String, default: 'new' },
  emailVerified: { type: Boolean, default: false }
}, {
  timestamps: true
});

module.exports = mongoose.model('Lead', leadSchema);