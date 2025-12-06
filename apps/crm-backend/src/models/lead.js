const mongoose = require('mongoose');

const LeadSchema = new mongoose.Schema({
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', default: null },
  counsellorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  leadSource: { type: String, enum: ['META', 'GOOGLE', 'REFERRAL', 'WHATSAPP', 'PARTNER', 'WEBSITE', 'OTHER'] },
  firstChannel: { type: String, enum: ['CALL', 'WHATSAPP', 'FORM', 'EMAIL'] },
  financialSnapshot: {
    approxIncome: Number,
    approxEmi: Number,
    loanCount: Number
  },
  stress: {
    stressLevel: { type: String, enum: ['LOW', 'MEDIUM', 'HIGH', 'EXTREME'] },
    harassmentLevel: { type: String, enum: ['NONE', 'CALLS', 'THREATS', 'HOME_VISIT', 'EMPLOYER_CONTACT'] },
    urgencyLevel: { type: String, enum: ['EXPLORING', 'NEED_HELP', 'DEFAULTED', 'LEGAL_NOTICE'] }
  },
  status: { type: String, enum: ['NEW', 'IN_PROGRESS', 'CONVERTED', 'REJECTED'], default: 'NEW' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

LeadSchema.pre('save', function (next) { this.updatedAt = Date.now(); next(); });

module.exports = mongoose.model('Lead', LeadSchema);
