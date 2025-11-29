const mongoose = require('mongoose');

const caseSchema = new mongoose.Schema({
  caseNumber: { type: String, required: true, unique: true },
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' },
  caseType: { 
    type: String, 
    enum: ['debt-relief', 'loan-settlement', 'credit-counseling', 'bankruptcy'],
    required: true 
  },
  status: { 
    type: String, 
    enum: ['new', 'in-progress', 'under-review', 'approved', 'rejected', 'settled', 'closed'],
    default: 'new'
  },
  priority: { 
    type: String, 
    enum: ['low', 'medium', 'high', 'urgent'],
    default: 'medium'
  },
  totalDebtAmount: { type: Number, required: true },
  settledAmount: { type: Number, default: 0 },
  savingsAmount: { type: Number, default: 0 },
  monthlyPayment: { type: Number },
  startDate: { type: Date, default: Date.now },
  expectedCompletionDate: { type: Date },
  actualCompletionDate: { type: Date },
  notes: [{ 
    text: String, 
    addedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' },
    addedAt: { type: Date, default: Date.now }
  }],
  documents: [{
    name: String,
    url: String,
    uploadedAt: { type: Date, default: Date.now }
  }],
  creditors: [{
    name: String,
    debtAmount: Number,
    settledAmount: Number,
    status: String
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('Case', caseSchema);
