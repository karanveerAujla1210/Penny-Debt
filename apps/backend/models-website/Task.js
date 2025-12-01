const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee', required: true },
  assignedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' },
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
  case: { type: mongoose.Schema.Types.ObjectId, ref: 'Case' },
  priority: { 
    type: String, 
    enum: ['low', 'medium', 'high', 'urgent'],
    default: 'medium'
  },
  status: { 
    type: String, 
    enum: ['pending', 'in-progress', 'completed', 'cancelled'],
    default: 'pending'
  },
  dueDate: { type: Date },
  completedAt: { type: Date },
  notes: { type: String }
}, {
  timestamps: true
});

module.exports = mongoose.model('Task', taskSchema);
