const mongoose = require('mongoose');

const IncomeExpenseSchema = new mongoose.Schema({
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
  monthlyIncome: { type: Number, default: 0 },
  incomeBreakdown: { type: mongoose.Schema.Types.Mixed },
  monthlyFixedExpenses: { type: mongoose.Schema.Types.Mixed },
  monthlyVariableExpenses: { type: mongoose.Schema.Types.Mixed },
  surplusAmount: { type: Number, default: 0 },
  affordabilityBand: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

IncomeExpenseSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('IncomeExpenseProfile', IncomeExpenseSchema);
