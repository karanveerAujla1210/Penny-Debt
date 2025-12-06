const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
  name: { 
    type: String, 
    enum: ['COUNSELLOR', 'ADVISOR', 'CREDIT', 'OPERATIONS', 'NEGOTIATOR', 'LEGAL', 'FINANCE', 'SUPPORT', 'RECOVERY', 'COMPLIANCE', 'ADMIN'],
    required: true,
    unique: true
  },
  permissions: [String],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Role', roleSchema);
