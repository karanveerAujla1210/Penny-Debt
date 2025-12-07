// Legacy models compatibility shim
// Any old code requiring from `../models` will receive the centralized exports
try {
  module.exports = require('../src/models');
} catch (err) {
  // If for some reason the central models index is unavailable, provide an empty shim
  console.warn('Warning: centralized models not found. Legacy models shim returning empty object.');
  module.exports = {};
}
