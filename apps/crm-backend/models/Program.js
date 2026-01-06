const mongoose = require('mongoose');

const programSchema = new mongoose.Schema({
  caseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Case', required: true },

  config: {
    programType: { 
      type: String, 
      enum: ['FULL', 'PARTIAL', 'EMI_RESTRUCTURE', 'LEGAL_ONLY'],
      required: true
    },
    startDate: Date,
    expectedDuration: Number,
    sipAmount: { type: Number, required: true },
    sipDebitDay: Number,
    strategy: { 
      type: String, 
      enum: ['AVALANCHE', 'SNOWBALL', 'CUSTOM'],
      default: 'AVALANCHE'
    }
  },

  loans: [{
    loanId: { type: mongoose.Schema.Types.ObjectId, ref: 'Loan' },
    priority: Number,
    expectedSettlementPct: Number,
    targetSettlementAmount: Number
  }],

  totals: {
    enrolledDebt: { type: Number, default: 0 },
    expectedSavings: { type: Number, default: 0 }
  },

  status: {
    type: String,
    enum: ['DRAFT', 'ACTIVE_PENDING_MANDATE', 'ACTIVE', 'ON_HOLD', 'COMPLETED', 'CANCELLED'],
    default: 'DRAFT'
  },

  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

// Indexes
programSchema.index({ caseId: 1 });
programSchema.index({ status: 1 });
programSchema.index({ 'loans.loanId': 1 });
programSchema.index({ createdBy: 1 });
programSchema.index({ createdAt: -1 });

programSchema.pre('save', async function(next) {
  if (this.isModified('loans')) {
    const Loan = mongoose.model('Loan');
    const loanIds = this.loans.map(l => l.loanId);
    const loans = await Loan.find({ _id: { $in: loanIds } });
    
    this.totals.enrolledDebt = loans.reduce((sum, loan) => sum + loan.details.currentOutstanding, 0);
    this.totals.expectedSavings = this.totals.enrolledDebt - 
      this.loans.reduce((sum, l) => sum + (l.targetSettlementAmount || 0), 0);
  }
  next();
});

// Legacy file replaced with shim to prefer canonical `src/models/program.js`.
// Original backed up to `Program.bak.js`.
try {
  module.exports = require('../src/models/program');
} catch (err) {
  module.exports = require('./Program.bak');
}
