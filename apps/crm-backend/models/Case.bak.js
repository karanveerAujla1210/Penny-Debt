const mongoose = require('mongoose');

const caseSchema = new mongoose.Schema({
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
  leadId: { type: mongoose.Schema.Types.ObjectId, ref: 'Lead' },
  advisorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  
  status: { 
    type: String, 
    enum: ['DRAFT', 'ACTIVE', 'ON_HOLD', 'COMPLETED', 'CANCELLED'],
    default: 'DRAFT'
  },

  creditApproval: {
    approved: Boolean,
    creditScore: Number,
    riskScore: Number,
    approvedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    approvedAt: Date,
    remarks: String
  },

  dbr: Number,
  
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Case', caseSchema);
