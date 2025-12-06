const mongoose = require('mongoose');

const SettlementSchema = new mongoose.Schema({
  loanId: { type: mongoose.Schema.Types.ObjectId, ref: 'Loan' },
  programId: { type: mongoose.Schema.Types.ObjectId, ref: 'Program' },
  negotiatorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  status: { type: String, enum: ['NEGOTIATING','OFFER_RECEIVED','APPROVED_BY_CUSTOMER','REJECTED','SETTLED'], default: 'NEGOTIATING' },
  lenderOffer: {
    amount: Number,
    percentage: Number
  },
  internalTargetPct: Number,
  customerDecision: { type: String, enum: ['PENDING','APPROVED','REJECTED','THINKING'], default: 'PENDING' },
  customerReason: String,
  noc: {
    expectedDate: Date,
    received: { type: Boolean, default: false }
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

SettlementSchema.pre('save', function (next) { this.updatedAt = Date.now(); next(); });

module.exports = mongoose.model('Settlement', SettlementSchema);
