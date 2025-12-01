const mongoose = require('mongoose');

const debtCaseSchema = new mongoose.Schema({
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  caseId: {
    type: String,
    required: true,
    unique: true,
    index: true
  },
  caseNumber: {
    type: String,
    required: true,
    unique: true
  },
  status: {
    type: String,
    enum: ['new', 'in_review', 'negotiating', 'settled', 'closed', 'rejected'],
    default: 'new'
  },
  totalDebt: {
    type: Number,
    required: true
  },
  enrolledAmount: {
    type: Number,
    default: 0
  },
  settledAmount: {
    type: Number,
    default: 0
  },
  creditors: [{
    name: String,
    accountNumber: String,
    originalBalance: Number,
    currentBalance: Number,
    status: String
  }],
  paymentPlan: {
    monthlyPayment: Number,
    termMonths: Number,
    startDate: Date,
    endDate: Date,
    status: String
  },
  documents: [{
    name: String,
    url: String,
    type: String,
    uploadedAt: {
      type: Date,
      default: Date.now
    }
  }],
  notes: [{
    content: String,
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  }],
  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  nextActionDate: Date,
  priority: {
    type: String,
    enum: ['low', 'medium', 'high', 'critical'],
    default: 'medium'
  },
  tags: [String],
  source: String,
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  closedAt: Date,
  closedReason: String
}, { timestamps: true });

// Generate unique case ID before saving
debtCaseSchema.pre('save', async function(next) {
  if (this.isNew && !this.caseId) {
    const year = new Date().getFullYear();
    const count = await this.constructor.countDocuments();
    const sequentialNumber = (count + 1).toString().padStart(5, '0');
    this.caseId = `PD-${year}-${sequentialNumber}`;
    this.caseNumber = this.caseId; // Backward compatibility
  }
  next();
});

// Index for faster queries
debtCaseSchema.index({ caseId: 1 });
debtCaseSchema.index({ status: 1 });
debtCaseSchema.index({ assignedTo: 1 });
debtCaseSchema.index({ createdAt: -1 });

module.exports = mongoose.model('DebtCase', debtCaseSchema);
