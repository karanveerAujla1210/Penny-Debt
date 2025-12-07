const { AuditLog } = require('../models');
const { permissions: permissionMap, roleHas } = require('../config/permissions');

// Check permission middleware.
// Usage: checkPermission('view:customer')
function checkPermission(permission) {
  return async (req, res, next) => {
    try {
      // Ensure req.user is present; authentication layer should set this.
      if (!req.user) {
        return res.status(401).json({ error: 'Authentication required' });
      }

      // Normalize roles: support string or array on user object
      const roles = Array.isArray(req.user.roles)
        ? req.user.roles
        : (req.user.role ? [req.user.role] : []);

      // If user has no roles, deny
      if (!roles || roles.length === 0) {
        await logAction(req.user._id, 'access', null, 'access_denied', null, { permission, roles }, req);
        return res.status(403).json({ error: 'Forbidden: no roles assigned' });
      }

      // Check each role for the required permission
      let allowed = false;
      for (const r of roles) {
        const rolePerms = permissionMap[r] || [];
        if (roleHas(rolePerms, permission)) {
          allowed = true;
          break;
        }
      }

      if (!allowed) {
        // log denied access for auditing
        await logAction(req.user._id, 'access', null, 'access_denied', null, { permission, roles }, req);
        return res.status(403).json({ error: 'Forbidden' });
      }

      // permitted
      next();
    } catch (err) {
      // in case of unexpected error, don't leak internals
      console.error('RBAC error:', err && err.message);
      return res.status(500).json({ error: 'RBAC internal error' });
    }
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
