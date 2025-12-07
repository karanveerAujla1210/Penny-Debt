const mongoose = require('mongoose');

const DebtPlanItemSchema = new mongoose.Schema({
  debtPlanId: { type: mongoose.Schema.Types.ObjectId, ref: 'DebtPlan', required: true },
  debtAccountId: { type: mongoose.Schema.Types.ObjectId, ref: 'DebtAccount', required: true },
  lenderOfferAmount: { type: Number, default: 0 },
  customerContribution: { type: Number, default: 0 },
  waiverAmount: { type: Number, default: 0 },
  expectedClosureDate: { type: Date },
  notes: String
});

module.exports = mongoose.model('DebtPlanItem', DebtPlanItemSchema);
