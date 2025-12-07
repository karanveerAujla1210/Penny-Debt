const mongoose = require('mongoose');

const DebtPlanSchema = new mongoose.Schema({
  caseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Case', required: true },
  planVersion: { type: Number, default: 1 },
  strategyType: { type: String, enum: ['SETTLEMENT','CONSOLIDATION','RESCHEDULE','HYBRID'], default: 'SETTLEMENT' },
  totalOutstanding: { type: Number, default: 0 },
  proposedSettlementAmount: { type: Number, default: 0 },
  tenureMonths: { type: Number, default: 0 },
  expectedMonthlyContribution: { type: Number, default: 0 },
  status: { type: String, enum: ['DRAFT','PROPOSED','ACCEPTED','REJECTED'], default: 'DRAFT' },
  items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'DebtPlanItem' }],
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

DebtPlanSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('DebtPlan', DebtPlanSchema);
