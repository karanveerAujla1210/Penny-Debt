const { AuditLog } = require('../models');

// Simple permissive checkPermission middleware stub.
// In production this should verify user roles/permissions.
function checkPermission(permission) {
  return (req, res, next) => {
    // If an authentication layer exists, it can set req.user
    if (!req.user) {
      // allow in development; attach anonymous user placeholder
      req.user = req.user || { _id: null, roles: ['__ANONYMOUS'] };
    }
    // No-op permission check for now
    next();
  };
}

async function logAction(userId, entity, entityId, action, before, after, req) {
  try {
    const entry = new AuditLog({
      userId: userId || (req && req.user && req.user._id) || null,
      entity,
      entityId: entityId || (after && after._id) || null,
      action,
      before,
      after,
      meta: {
        url: req && req.originalUrl,
        method: req && req.method
      },
      ip: req && (req.ip || req.headers['x-forwarded-for'] || req.connection && req.connection.remoteAddress),
      userAgent: req && req.headers && req.headers['user-agent']
    });
    await entry.save();
    return entry;
  } catch (err) {
    // logging failure should not break request
    console.warn('Audit log error:', err && err.message);
    return null;
  }
}

module.exports = { checkPermission, logAction };
