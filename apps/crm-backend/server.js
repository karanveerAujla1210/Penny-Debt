require('dotenv').config();
const app = require('./src/app');
const { connectDb } = require('./src/config/db');

const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || '0.0.0.0';

// Connect to database
connectDb()
  .then(() => {
    // Start server
    app.listen(PORT, HOST, () => {
      console.log('🚀 ========================================');
      console.log(`🚀 Server running on ${HOST}:${PORT}`);
      console.log(`📦 Environment: ${process.env.NODE_ENV || 'development'}`);
      console.log('🌐 ========================================');
      console.log('📍 API Endpoints:');
      console.log('   Website API: /api/v1/website/*');
      console.log('   CRM API:     /api/v1/crm/*');
      console.log('   Mobile API:  /api/v1/mobile/*');
      console.log('   Legacy API:  /api/* (deprecated)');
      console.log('🌐 ========================================');
    });
  })
  .catch((error) => {
    console.error('❌ Failed to start server:', error);
    process.exit(1);
  });

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('👋 SIGTERM received, shutting down gracefully');
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('👋 SIGINT received, shutting down gracefully');
  process.exit(0);
});
