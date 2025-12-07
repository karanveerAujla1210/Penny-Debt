// Legacy file replaced with shim to prefer canonical `src/models/communication.js`.
// Original backed up to `Communication.bak.js`.
try {
  module.exports = require('../src/models/communication');
} catch (err) {
  module.exports = require('./Communication.bak');
}
