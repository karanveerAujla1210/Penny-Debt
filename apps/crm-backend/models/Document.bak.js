const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema({
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
  
  type: { 
    type: String, 
    enum: ['PAN', 'AADHAAR', 'BANK_STATEMENT', 'SALARY_SLIP', 'LOAN_STATEMENT', 'PROGRAM_AGREEMENT', 'NOC', 'LEGAL_NOTICE', 'OTHER'],
    required: true 
  },
  
  fileName: { type: String, required: true },
  fileUrl: { type: String, required: true },
  fileSize: Number,
  mimeType: String,
  
  relatedEntity: {
    entityType: { type: String, enum: ['LOAN', 'CASE', 'SETTLEMENT', 'LEGAL_CASE', 'HARASSMENT_CASE'] },
    entityId: mongoose.Schema.Types.ObjectId
  },
  
  uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  verified: { type: Boolean, default: false },
  verifiedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Document', documentSchema);
