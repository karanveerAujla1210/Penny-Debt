const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  caseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'DebtCase',
    required: true
  },
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  type: {
    type: String,
    enum: ['enrollment', 'monthly', 'settlement', 'fee', 'refund', 'other'],
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'processing', 'completed', 'failed', 'cancelled', 'refunded'],
    default: 'pending'
  },
  paymentMethod: {
    type: String,
    enum: ['credit_card', 'debit_card', 'bank_transfer', 'check', 'money_order', 'other'],
    required: true
  },
  paymentDate: {
    type: Date,
    default: Date.now
  },
  processedDate: Date,
  referenceNumber: String,
  notes: String,
  allocatedTo: [{
    creditor: String,
    amount: Number,
    status: {
      type: String,
      enum: ['pending', 'processed', 'rejected'],
      default: 'pending'
    },
    processedDate: Date,
    notes: String
  }],
  failureReason: String,
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  attachments: [{
    name: String,
    url: String,
    type: String
  }],
  isRecurring: {
    type: Boolean,
    default: false
  },
  recurringDetails: {
    frequency: {
      type: String,
      enum: ['weekly', 'biweekly', 'monthly', 'quarterly', 'annually']
    },
    nextPaymentDate: Date,
    endDate: Date,
    totalOccurrences: Number,
    completedOccurrences: {
      type: Number,
      default: 0
    }
  },
  metadata: mongoose.Schema.Types.Mixed
}, { timestamps: true });

// Indexes for better query performance
paymentSchema.index({ caseId: 1, paymentDate: -1 });
paymentSchema.index({ client: 1, status: 1 });
paymentSchema.index({ type: 1, status: 1 });
paymentSchema.index({ 'recurringDetails.nextPaymentDate': 1 });

// Pre-save hook to handle payment processing
paymentSchema.pre('save', function(next) {
  if (this.isNew) {
    // Generate reference number for new payments
    this.referenceNumber = `PYM-${Date.now()}-${Math.floor(Math.random() * 1000).toString().padStart(3, '0')}`;
  }
  
  // Update processed date when status changes to completed
  if (this.isModified('status') && this.status === 'completed' && !this.processedDate) {
    this.processedDate = new Date();
  }
  
  next();
});

module.exports = mongoose.model('Payment', paymentSchema);
