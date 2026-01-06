const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
  counsellorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },

  leadSource: { 
    type: String, 
    enum: ['META', 'GOOGLE', 'REFERRAL', 'WHATSAPP', 'PARTNER', 'WEBSITE', 'OTHER'],
    required: true 
  },
  firstChannel: { 
    type: String, 
    enum: ['CALL', 'WHATSAPP', 'FORM', 'EMAIL'] 
  },

  financialSnapshot: {
    approxIncome: Number,
    approxEmi: Number,
    loanCount: Number
  },

  stress: {
    stressLevel: { type: String, enum: ['LOW', 'MEDIUM', 'HIGH', 'EXTREME'] },
    harassmentLevel: { type: String, enum: ['NONE', 'CALLS', 'THREATS', 'HOME_VISIT', 'EMPLOYER_CONTACT'] },
    urgencyLevel: { type: String, enum: ['EXPLORING', 'NEED_HELP', 'DEFAULTED', 'LEGAL_NOTICE'] }
  },

  status: { 
    type: String, 
    enum: ['NEW', 'IN_PROGRESS', 'CONVERTED', 'REJECTED', 'NURTURE'],
    default: 'NEW'
  },
  
  counsellorNotes: String,
  rejectionReason: String,
  assignedAdvisor: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },

  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

// Indexes
leadSchema.index({ counsellorId: 1, status: 1 });
leadSchema.index({ assignedAdvisor: 1 });
leadSchema.index({ status: 1 });
leadSchema.index({ leadSource: 1 });
leadSchema.index({ createdAt: -1 });

// Legacy file replaced with shim to prefer canonical `src/models/lead.js`.
// Original backed up to `Lead.bak.js`.
try {
  module.exports = require('../src/models/lead');
} catch (err) {
  module.exports = require('./Lead.bak');
}
