const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
  programId: { type: mongoose.Schema.Types.ObjectId, ref: 'Program', required: true },
  loanId: { type: mongoose.Schema.Types.ObjectId, ref: 'Loan' },

  paymentType: { 
    type: String, 
    enum: ['SIP', 'SETTLEMENT', 'FEE', 'REFUND'],
    required: true
  },
  
  amount: { type: Number, required: true },
  scheduledDate: Date,
  paidDate: Date,
  
  status: { 
    type: String, 
    enum: ['PENDING', 'SUCCESS', 'FAILED'],
    default: 'PENDING'
  },
  
  referenceId: String,
  gatewayResponse: mongoose.Schema.Types.Mixed,
  failureReason: String,
  retryCount: { type: Number, default: 0 },

  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Payment', paymentSchema);
