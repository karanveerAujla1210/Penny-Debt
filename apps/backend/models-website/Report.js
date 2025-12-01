const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
  reportType: { 
    type: String, 
    enum: ['daily', 'weekly', 'monthly', 'quarterly', 'annual', 'custom'],
    required: true 
  },
  title: { type: String, required: true },
  generatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee', required: true },
  department: { type: String },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  data: { type: mongoose.Schema.Types.Mixed },
  summary: { type: String },
  fileUrl: { type: String },
  status: { 
    type: String, 
    enum: ['draft', 'published', 'archived'],
    default: 'draft'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Report', reportSchema);
