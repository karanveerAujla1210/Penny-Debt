const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
  relatedId: { type: mongoose.Schema.Types.ObjectId, required: true },
  type: { 
    type: String, 
    enum: ['debt_application', 'customer', 'contact', 'career'],
    required: true 
  },
  action: { 
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