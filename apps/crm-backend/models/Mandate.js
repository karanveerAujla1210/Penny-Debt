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

module.exports = mongoose.model('Mandate', mandateSchema);
