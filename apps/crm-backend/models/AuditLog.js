// Legacy file replaced with shim to prefer canonical `src/models/audit_log.js`.
// Original backed up to `AuditLog.bak.js`.
try {
  module.exports = require('../src/models/audit_log');
} catch (err) {
  module.exports = require('./AuditLog.bak');
}
