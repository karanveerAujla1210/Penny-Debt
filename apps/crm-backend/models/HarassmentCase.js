const mongoose = require('mongoose');

const harassmentCaseSchema = new mongoose.Schema({
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
  loanId: { type: mongoose.Schema.Types.ObjectId, ref: 'Loan' },
  
  type: { type: String, enum: ['CALLS', 'THREATS', 'HOME_VISIT', 'EMPLOYER_CONTACT', 'FAMILY_CONTACT', 'ABUSE', 'OTHER'], required: true },
  severity: { type: String, enum: ['LOW', 'MEDIUM', 'HIGH', 'CRITICAL'], default: 'MEDIUM' },
  description: { type: String, required: true },
  
  callerDetails: {
    name: String,
    phone: String,
    agency: String
  },
  
  evidence: [{
    type: { type: String, enum: ['AUDIO', 'VIDEO', 'SCREENSHOT', 'DOCUMENT'] },
    url: String,
    documentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Document' }
  }],
  
  status: { type: String, enum: ['OPEN', 'IN_PROGRESS', 'RESOLVED', 'ESCALATED'], default: 'OPEN' },
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  resolution: String,
  
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('HarassmentCase', harassmentCaseSchema);
