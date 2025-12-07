try {
  // Require the central models index
  const models = require('../src/models');

  console.log('Loaded models:');
  Object.keys(models).forEach(k => console.log(' -', k));
  process.exit(0);
} catch (err) {
  console.error('Failed to require models:', err && err.stack ? err.stack : err);
  process.exit(1);
}
