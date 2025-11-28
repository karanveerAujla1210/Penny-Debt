const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Database connection
const { setupSecurity } = require('./middleware/security');
const { connectDb } = require('./config/database');
connectDb();

// Apply security middleware
setupSecurity(app);

// Website Routes (Public)
app.use('/api/auth', require('./routes/auth'));
app.use('/api/otp', require('./routes/otp'));
app.use('/api/leads', require('./routes/leads'));
app.use('/api/customers', require('./routes/customers'));
app.use('/api/careers', require('./routes/careers'));
app.use('/api/loan-applications', require('./routes/loanApplications'));
app.use('/api/csp-report', require('./routes/cspReport'));
app.use('/api/contacts', require('./routes/contacts'));
app.use('/api/applications', require('./routes/applications'));
app.use('/api/testimonials', require('./routes/testimonials'));
app.use('/api/services', require('./routes/services'));
app.use('/api/faqs', require('./routes/faqs'));
app.use('/api/blog', require('./routes/blogs'));
app.use('/api/stats', require('./routes/stats'));

// CRM Routes (Internal) - Using same MongoDB models
app.use('/api/crm/leads', require('./routes/leads'));
app.use('/api/crm/customers', require('./routes/customers'));
app.use('/api/crm/applications', require('./routes/applications'));

// Health check
app.get('/health', (req, res) => {
  const mongoose = require('mongoose');
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    mongodb: {
      connected: mongoose.connection.readyState === 1,
      state: mongoose.connection.readyState
    }
  });
});

// Error handling
app.use((err, req, res, _next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({ 
    error: process.env.NODE_ENV === 'production' ? 'Internal server error' : err.message
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || '0.0.0.0';

app.listen(PORT, HOST, () => {
  console.log(`🚀 Server running on ${HOST}:${PORT}`);
  console.log(`📦 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`🌐 Website API: /api/*`);
  console.log(`🏢 CRM API: /api/crm/*`);
});
