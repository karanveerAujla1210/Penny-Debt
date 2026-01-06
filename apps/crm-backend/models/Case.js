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

// Indexes
caseSchema.index({ customerId: 1 });
caseSchema.index({ advisorId: 1, status: 1 });
caseSchema.index({ status: 1 });
caseSchema.index({ createdAt: -1 });
// Legacy file replaced with shim to prefer canonical `src/models/case.js`.
// Original backed up to `Case.bak.js`.
try {
  module.exports = require('../src/models/case');
} catch (err) {
  // fallback to legacy implementation backup
  module.exports = require('./Case.bak');
}
