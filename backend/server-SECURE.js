const express = require('express');
require('dotenv').config();
const { setupSecurity } = require('./middleware/security');
const { connectDb } = require('./config/database');

const app = express();

// Connect to MongoDB
connectDb();

// Apply security middleware
setupSecurity(app);

// Routes
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
});
