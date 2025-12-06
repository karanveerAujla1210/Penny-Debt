const mongoose = require('mongoose');

const ProgramSchema = new mongoose.Schema({
  caseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Case' },
  config: {
    programType: { type: String, enum: ['FULL','PARTIAL','EMI_RESTRUCTURE','LEGAL_ONLY'] },
    startDate: Date,
    expectedDuration: Number,
    sipAmount: Number,
    sipDebitDay: Number,
    strategy: { type: String, enum: ['AVALANCHE','SNOWBALL','CUSTOM'] }
  },
  loans: [
    {
      loanId: { type: mongoose.Schema.Types.ObjectId, ref: 'Loan' },
      priority: Number,
      expectedSettlementPct: Number,
      targetSettlementAmount: Number
    }
  ],
  totals: {
    enrolledDebt: Number,
    expectedSavings: Number
  },
  status: { type: String, enum: ['DRAFT','ACTIVE','ON_HOLD','COMPLETED','CANCELLED'], default: 'DRAFT' },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

ProgramSchema.pre('save', function (next) { this.updatedAt = Date.now(); next(); });

module.exports = mongoose.model('Program', ProgramSchema);
