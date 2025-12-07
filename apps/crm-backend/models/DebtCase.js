// Legacy file replaced with shim to prefer canonical `src/models/debtcase.js`.
// Original backed up to `DebtCase.bak.js`.
try {
  module.exports = require('../src/models/debtcase');
} catch (err) {
  module.exports = require('./DebtCase.bak');
}
