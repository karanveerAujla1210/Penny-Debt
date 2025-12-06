const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema({
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
  caseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Case', required: true },

  lender: {
    name: { type: String, required: true },
    category: { type: String, enum: ['BANK', 'NBFC', 'FINTECH', 'CARD'], required: true }
  },

  details: {
    productType: { 
      type: String, 
      enum: ['CREDIT_CARD', 'PERSONAL_LOAN', 'BUSINESS_LOAN', 'BNPL', 'AUTO_LOAN', 'HOME_LOAN', 'LINE_OF_CREDIT'],
      required: true
    },
    accountNumber: String,
    originalAmount: { type: Number, required: true },
    currentOutstanding: { type: Number, required: true },
    emiAmount: Number,
    emiDueDay: Number
  },

  status: {
    dpdStatus: { 
      type: String, 
      enum: ['CURRENT', 'DPD_30', 'DPD_60', 'DPD_90', 'WRITE_OFF', 'SETTLED'],
      default: 'CURRENT'
    },
    lastPaymentDate: Date,
    lastPaymentAmount: Number
  },

  risk: {
    harassmentFlag: { type: Boolean, default: false },
    legalNotice: { 
      type: String, 
      enum: ['NONE', 'SEC_138', 'ARBITRATION', 'CIVIL', 'OTHER'],
      default: 'NONE'
    }
  },

  includeInProgram: { type: Boolean, default: true },
  
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Loan', loanSchema);
