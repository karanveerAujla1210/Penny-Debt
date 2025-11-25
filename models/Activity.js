const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
  leadId: { type: mongoose.Schema.Types.ObjectId, required: true },
  leadType: { 
    type: String, 
    enum: ['lead', 'customer', 'contact', 'career'],
    required: true 
  },
  activityType: { 
    type: String, 
    enum: ['call', 'email', 'meeting', 'note', 'status_change', 'document'],
    required: true 
  },
  subject: { type: String, required: true },
  description: { type: String },
  performedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  metadata: { type: mongoose.Schema.Types.Mixed }
}, {
  timestamps: true
});

module.exports = mongoose.model('Activity', activitySchema);