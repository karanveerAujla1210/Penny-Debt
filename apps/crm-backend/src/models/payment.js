const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
  programId: { type: mongoose.Schema.Types.ObjectId, ref: 'Program' },
  loanId: { type: mongoose.Schema.Types.ObjectId, ref: 'Loan', default: null },
  paymentType: { type: String, enum: ['SIP','SETTLEMENT','FEE','REFUND'] },
  amount: Number,
  scheduledDate: Date,
  paidDate: Date,
  status: { type: String, enum: ['PENDING','SUCCESS','FAILED'], default: 'PENDING' },
  referenceId: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Payment', PaymentSchema);
