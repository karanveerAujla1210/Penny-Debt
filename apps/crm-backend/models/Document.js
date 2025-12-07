// Legacy file replaced with shim to prefer canonical `src/models/document.js`.
// Original backed up to `Document.bak.js`.
try {
  module.exports = require('../src/models/document');
} catch (err) {
  module.exports = require('./Document.bak');
}
