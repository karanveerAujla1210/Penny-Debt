const mongoose = require('mongoose');

const mandateSchema = new mongoose.Schema({
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
  programId: { type: mongoose.Schema.Types.ObjectId, ref: 'Program', required: true },

  bank: {
    name: String,
    accountNumber: String,
    ifsc: String
  },

  mandateType: { 
    type: String, 
    enum: ['NACH', 'E_NACH', 'UPI_AUTOPAY', 'CARD_AUTO_DEBIT'],
    required: true
  },
  
  status: { 
    type: String, 
    enum: ['NOT_SENT', 'SENT', 'APPROVED', 'FAILED', 'CANCELLED'],
    default: 'NOT_SENT'
  },
  
  statusReason: String,
  mandateId: String,
  approvedDate: Date,

  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

// Indexes
mandateSchema.index({ customerId: 1 });
mandateSchema.index({ programId: 1 });
mandateSchema.index({ status: 1 });
mandateSchema.index({ mandateType: 1 });
mandateSchema.index({ createdAt: -1 });

// Legacy file replaced with shim to prefer canonical `src/models/mandate.js`.
// Original backed up to `Mandate.bak.js`.
try {
  module.exports = require('../src/models/mandate');
} catch (err) {
  module.exports = require('./Mandate.bak');
}
