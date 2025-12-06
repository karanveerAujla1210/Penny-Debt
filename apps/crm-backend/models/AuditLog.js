const mongoose = require('mongoose');

const auditLogSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  
  entityType: { 
    type: String, 
    enum: ['CUSTOMER', 'LEAD', 'CASE', 'LOAN', 'PROGRAM', 'SETTLEMENT', 'PAYMENT', 'MANDATE', 'USER'],
    required: true 
  },
  entityId: { type: mongoose.Schema.Types.ObjectId, required: true },
  
  action: { 
    type: String, 
    enum: ['CREATE', 'UPDATE', 'DELETE', 'STATUS_CHANGE', 'ACCESS', 'ACCESS_DENIED'],
    required: true 
  },
  
  previousData: mongoose.Schema.Types.Mixed,
  newData: mongoose.Schema.Types.Mixed,
  
  ipAddress: String,
  userAgent: String,
  
  createdAt: { type: Date, default: Date.now, immutable: true }
});

auditLogSchema.index({ userId: 1, createdAt: -1 });
auditLogSchema.index({ entityType: 1, entityId: 1 });

module.exports = mongoose.model('AuditLog', auditLogSchema);
