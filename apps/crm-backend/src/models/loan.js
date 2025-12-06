const mongoose = require('mongoose');

const LoanSchema = new mongoose.Schema({
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
  caseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Case' },
  lender: {
    name: String,
    category: { type: String, enum: ['BANK', 'NBFC', 'FINTECH', 'CARD'] }
  },
  details: {
    productType: { type: String, enum: ['CREDIT_CARD','PERSONAL_LOAN','BUSINESS_LOAN','BNPL','AUTO_LOAN','HOME_LOAN','LINE_OF_CREDIT'] },
    accountNumber: String,
    originalAmount: Number,
    currentOutstanding: Number,
    emiAmount: Number,
    emiDueDay: Number
  },
  status: {
    dpdStatus: { type: String, enum: ['CURRENT','DPD_30','DPD_60','DPD_90','WRITE_OFF','SETTLED'], default: 'CURRENT' },
    lastPaymentDate: Date,
    lastPaymentAmount: Number
  },
  risk: {
    harassmentFlag: { type: Boolean, default: false },
    legalNotice: { type: String, enum: ['NONE','SEC_138','ARBITRATION','CIVIL','OTHER'], default: 'NONE' }
  },
  includeInProgram: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

LoanSchema.pre('save', function (next) { this.updatedAt = Date.now(); next(); });

module.exports = mongoose.model('Loan', LoanSchema);
