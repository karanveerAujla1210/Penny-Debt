const mongoose = require('mongoose');

const communicationSchema = new mongoose.Schema({
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
    enum: ['call', 'email', 'meeting', 'letter', 'document', 'system'],
    required: true
  },
  direction: {
    type: String,
    enum: ['inbound', 'outbound'],
    required: true
  },
  subject: String,
  content: {
    type: String,
    required: true
  },
  attachments: [{
    name: String,
    url: String,
    type: String,
    size: Number
  }],
  relatedTo: [{
    type: String,
    enum: ['creditor', 'payment', 'document', 'other']
  }],
  status: {
    type: String,
    enum: ['pending', 'in_progress', 'completed', 'failed'],
    default: 'completed'
  },
  followUp: {
    required: Boolean,
    date: Date,
    notes: String
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  isImportant: {
    type: Boolean,
    default: false
  },
  tags: [String]
}, { timestamps: true });

communicationSchema.index({ caseId: 1, createdAt: -1 });
communicationSchema.index({ client: 1, createdAt: -1 });
communicationSchema.index({ type: 1, status: 1 });

module.exports = mongoose.model('Communication', communicationSchema);
