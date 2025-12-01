const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
  case: { type: mongoose.Schema.Types.ObjectId, ref: 'Case' },
  amount: { type: Number, required: true },
  paymentMethod: { 
    type: String, 
    enum: ['credit-card', 'debit-card', 'bank-transfer', 'upi', 'cash', 'cheque'],
    required: true 
  },
  transactionId: { type: String, unique: true },
  status: { 
    type: String, 
    enum: ['pending', 'processing', 'completed', 'failed', 'refunded'],
    default: 'pending'
  },
  paymentDate: { type: Date, default: Date.now },
  description: { type: String },
  receiptUrl: { type: String }
}, {
  timestamps: true
});

module.exports = mongoose.model('Payment', paymentSchema);
