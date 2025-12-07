// Legacy file replaced with shim to prefer canonical `src/models/legal_case.js`.
// Original backed up to `LegalCase.bak.js`.
try {
  module.exports = require('../src/models/legal_case');
} catch (err) {
  module.exports = require('./LegalCase.bak');
}
