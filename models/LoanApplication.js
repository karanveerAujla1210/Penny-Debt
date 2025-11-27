const mongoose = require('mongoose');

const loanApplicationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  amount: { type: Number, required: true },
  product: { type: String, required: true },
  purpose: { type: String },
  tenure: { type: Number },
  rate: { type: Number },
  consent: { type: Boolean, default: false },
  referral: { type: String },
  honey: { type: String }, // honeypot field
  details: { type: mongoose.Schema.Types.Mixed }
}, {
  timestamps: true
});

module.exports = mongoose.model('LoanApplication', loanApplicationSchema);
