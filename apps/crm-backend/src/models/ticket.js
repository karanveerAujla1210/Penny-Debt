const mongoose = require('mongoose');

const TicketSchema = new mongoose.Schema({
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
  type: String,
  priority: { type: String, enum: ['LOW','MEDIUM','HIGH','CRITICAL'], default: 'LOW' },
  channel: { type: String, enum: ['WHATSAPP','CALL','EMAIL','IN_APP'], default: 'IN_APP' },
  status: { type: String, enum: ['OPEN','IN_PROGRESS','WAITING','RESOLVED'], default: 'OPEN' },
  description: String,
  internalNotes: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Ticket', TicketSchema);
