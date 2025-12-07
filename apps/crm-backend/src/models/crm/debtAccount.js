const mongoose = require('mongoose');

const DebtAccountSchema = new mongoose.Schema({
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
  lenderName: { type: String },
  productType: { type: String, enum: ['CREDIT_CARD','PERSONAL_LOAN','BUSINESS_LOAN','OVERDRAFT','OTHER'], default: 'OTHER' },
  originalPrincipal: { type: Number, default: 0 },
  currentPrincipal: { type: Number, default: 0 },
  interestRate: { type: Number },
  emiAmount: { type: Number },
  emiDueDay: { type: Number },
  daysPastDue: { type: Number, default: 0 },
  status: { type: String, enum: ['ACTIVE','CLOSED','WRITTEN_OFF','SETTLED'], default: 'ACTIVE' },
  meta: { type: mongoose.Schema.Types.Mixed },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

DebtAccountSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('DebtAccount', DebtAccountSchema);
