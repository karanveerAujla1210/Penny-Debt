const mongoose = require('mongoose');

const settlementSchema = new mongoose.Schema({
  loanId: { type: mongoose.Schema.Types.ObjectId, ref: 'Loan', required: true },
  programId: { type: mongoose.Schema.Types.ObjectId, ref: 'Program', required: true },
  negotiatorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },

  status: { 
    type: String, 
    enum: ['NEGOTIATING', 'OFFER_RECEIVED', 'APPROVED_BY_CUSTOMER', 'REJECTED', 'SETTLED'],
    default: 'NEGOTIATING'
  },

  lenderOffer: {
    amount: Number,
    percentage: Number,
    validUntil: Date
  },

  internalTargetPct: Number,
  
  customerDecision: { 
    type: String, 
    enum: ['PENDING', 'APPROVED', 'REJECTED', 'THINKING'],
    default: 'PENDING'
  },
  customerReason: String,
  customerDecidedAt: Date,

  noc: {
    expectedDate: Date,
    received: { type: Boolean, default: false },
    receivedDate: Date,
    documentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Document' }
  },

  settlementPaid: { type: Boolean, default: false },
  paidDate: Date,

  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

// Indexes
settlementSchema.index({ loanId: 1 });
settlementSchema.index({ programId: 1 });
settlementSchema.index({ negotiatorId: 1 });
settlementSchema.index({ status: 1 });
settlementSchema.index({ customerDecision: 1 });
settlementSchema.index({ createdAt: -1 });

// Legacy file replaced with shim to prefer canonical `src/models/settlement.js`.
// Original backed up to `Settlement.bak.js`.
try {
  module.exports = require('../src/models/settlement');
} catch (err) {
  module.exports = require('./Settlement.bak');
}
