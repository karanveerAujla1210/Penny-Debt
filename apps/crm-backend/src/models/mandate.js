const mongoose = require('mongoose');

const MandateSchema = new mongoose.Schema({
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
  programId: { type: mongoose.Schema.Types.ObjectId, ref: 'Program' },
  bank: {
    name: String,
    accountNumber: String,
    ifsc: String
  },
  mandateType: { type: String, enum: ['NACH','E_NACH','UPI_AUTOPAY','CARD_AUTO_DEBIT'] },
  status: { type: String, enum: ['NOT_SENT','SENT','APPROVED','FAILED','CANCELLED'], default: 'NOT_SENT' },
  statusReason: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

MandateSchema.pre('save', function (next) { this.updatedAt = Date.now(); next(); });

module.exports = mongoose.model('Mandate', MandateSchema);
