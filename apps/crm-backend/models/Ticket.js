const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
  
  type: { type: String, enum: ['QUERY', 'COMPLAINT', 'TECHNICAL', 'PAYMENT', 'DOCUMENT', 'OTHER'], required: true },
  priority: { type: String, enum: ['LOW', 'MEDIUM', 'HIGH', 'URGENT'], default: 'MEDIUM' },
  
  subject: { type: String, required: true },
  description: { type: String, required: true },
  
  status: { type: String, enum: ['OPEN', 'IN_PROGRESS', 'RESOLVED', 'CLOSED'], default: 'OPEN' },
  
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  resolution: String,
  
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

// Indexes
ticketSchema.index({ customerId: 1 });
ticketSchema.index({ type: 1, status: 1 });
ticketSchema.index({ assignedTo: 1 });
ticketSchema.index({ priority: 1 });
ticketSchema.index({ createdAt: -1 });

// Legacy file replaced with shim to prefer canonical `src/models/ticket.js`.
// Original backed up to `Ticket.bak.js`.
try {
  module.exports = require('../src/models/ticket');
} catch (err) {
  module.exports = require('./Ticket.bak');
}
