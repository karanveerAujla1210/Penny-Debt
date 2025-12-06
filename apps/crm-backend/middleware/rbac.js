const Role = require('../models/Role');
const AuditLog = require('../models/AuditLog');

const PERMISSIONS = {
  // Counsellor
  'create:lead': ['COUNSELLOR', 'ADMIN'],
  'update:lead': ['COUNSELLOR', 'ADVISOR', 'ADMIN'],
  'view:lead': ['COUNSELLOR', 'ADVISOR', 'ADMIN'],
  
  // Advisor
  'create:case': ['ADVISOR', 'ADMIN'],
  'update:case': ['ADVISOR', 'ADMIN'],
  'create:loan': ['ADVISOR', 'ADMIN'],
  'update:loan': ['ADVISOR', 'CREDIT', 'ADMIN'],
  'create:program': ['ADVISOR', 'ADMIN'],
  'update:program': ['ADVISOR', 'OPERATIONS', 'RECOVERY', 'ADMIN'],
  
  // Credit
  'update:credit': ['CREDIT', 'ADMIN'],
  'verify:kyc': ['CREDIT', 'ADMIN'],
  
  // Operations
  'create:mandate': ['OPERATIONS', 'ADMIN'],
  'update:mandate': ['OPERATIONS', 'ADMIN'],
  'update:payment': ['OPERATIONS', 'FINANCE', 'ADMIN'],
  
  // Negotiator
  'create:settlement': ['NEGOTIATOR', 'ADMIN'],
  'update:settlement': ['NEGOTIATOR', 'FINANCE', 'ADMIN'],
  
  // Legal
  'create:legal': ['LEGAL', 'ADMIN'],
  'update:legal': ['LEGAL', 'ADMIN'],
  'create:harassment': ['LEGAL', 'SUPPORT', 'ADMIN'],
  
  // Finance
  'update:payment_status': ['FINANCE', 'ADMIN'],
  'view:finance': ['FINANCE', 'ADMIN'],
  
  // Support
  'create:ticket': ['SUPPORT', 'ADMIN'],
  'update:ticket': ['SUPPORT', 'ADMIN'],
  
  // Compliance
  'view:audit': ['COMPLIANCE', 'ADMIN'],
  'override:all': ['COMPLIANCE', 'ADMIN']
};

const checkPermission = (permission) => {
  return async (req, res, next) => {
    try {
      const user = req.user;
      if (!user) return res.status(401).json({ error: 'Unauthorized' });

      const roles = await Role.find({ _id: { $in: user.roles } });
      const roleNames = roles.map(r => r.name);
      
      const allowedRoles = PERMISSIONS[permission] || [];
      const hasPermission = roleNames.some(role => allowedRoles.includes(role));
      
      if (!hasPermission) {
        await AuditLog.create({
          userId: user._id,
          entityType: 'USER',
          entityId: user._id,
          action: 'ACCESS_DENIED',
          newData: { permission, endpoint: req.path },
          ipAddress: req.ip,
          userAgent: req.get('user-agent')
        });
        return res.status(403).json({ error: 'Forbidden' });
      }
      
      next();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
};

const logAction = async (userId, entityType, entityId, action, previousData, newData, req) => {
  await AuditLog.create({
    userId,
    entityType,
    entityId,
    action,
    previousData,
    newData,
    ipAddress: req.ip,
    userAgent: req.get('user-agent')
  });
};

module.exports = { checkPermission, logAction, PERMISSIONS };
