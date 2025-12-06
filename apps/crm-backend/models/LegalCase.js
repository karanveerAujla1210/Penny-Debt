const mongoose = require('mongoose');

const legalCaseSchema = new mongoose.Schema({
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
  loanId: { type: mongoose.Schema.Types.ObjectId, ref: 'Loan' },
  
  caseType: { type: String, enum: ['SEC_138', 'ARBITRATION', 'CIVIL', 'CRIMINAL', 'OTHER'], required: true },
  caseNumber: String,
  court: String,
  
  status: { type: String, enum: ['NOTICE_RECEIVED', 'REPLY_SENT', 'HEARING_SCHEDULED', 'IN_COURT', 'SETTLED', 'DISMISSED', 'JUDGMENT'], default: 'NOTICE_RECEIVED' },
  
  noticeDate: Date,
  hearingDate: Date,
  
  advocate: {
    name: String,
    phone: String,
    email: String
  },
  
  documents: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Document' }],
  notes: String,
  
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('LegalCase', legalCaseSchema);
