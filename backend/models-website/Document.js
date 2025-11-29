const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema({
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
  case: { type: mongoose.Schema.Types.ObjectId, ref: 'Case' },
  documentType: { 
    type: String, 
    enum: ['identity-proof', 'address-proof', 'income-proof', 'bank-statement', 
           'debt-statement', 'agreement', 'settlement-letter', 'other'],
    required: true 
  },
  fileName: { type: String, required: true },
  fileUrl: { type: String, required: true },
  fileSize: { type: Number },
  mimeType: { type: String },
  uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' },
  verificationStatus: { 
    type: String, 
    enum: ['pending', 'verified', 'rejected'],
    default: 'pending'
  },
  verifiedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' },
  verifiedAt: { type: Date },
  notes: { type: String }
}, {
  timestamps: true
});

module.exports = mongoose.model('Document', documentSchema);
