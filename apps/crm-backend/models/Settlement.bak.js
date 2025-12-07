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

module.exports = mongoose.model('Settlement', settlementSchema);
