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

// Indexes
paymentSchema.index({ customerId: 1 });
paymentSchema.index({ programId: 1 });
paymentSchema.index({ loanId: 1 });
paymentSchema.index({ paymentType: 1, status: 1 });
paymentSchema.index({ scheduledDate: 1 });
paymentSchema.index({ status: 1 });
paymentSchema.index({ createdAt: -1 });

// Legacy file replaced with shim to prefer canonical `src/models/payment.js`.
// Original backed up to `Payment.bak.js`.
try {
  module.exports = require('../src/models/payment');
} catch (err) {
  module.exports = require('./Payment.bak');
}
