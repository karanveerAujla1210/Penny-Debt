const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const mongoSanitize = require('express-mongo-sanitize');
const hpp = require('hpp');
const rateLimit = require('express-rate-limit');
const path = require('path');

const app = express();

// Security middleware
app.use(helmet({
  contentSecurityPolicy: process.env.NODE_ENV === 'production',
  crossOriginEmbedderPolicy: false
}));

// Force HTTPS in production
if (process.env.NODE_ENV === 'production') {
  app.use((req, res, next) => {
    if (req.header('x-forwarded-proto') !== 'https') {
      return res.redirect(`https://${req.header('host')}${req.url}`);
    }
    next();
  });
}

// Rate limiting
const limiter = rateLimit({
  windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS) || 900000, // 15 minutes
  max: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS) || 100,
  message: 'Too many requests, please try again later',
  standardHeaders: true,
  legacyHeaders: false
});

app.use('/api/', limiter);

// CORS configuration
const allowedOrigins = process.env.ALLOWED_ORIGINS 
  ? process.env.ALLOWED_ORIGINS.split(',').map(origin => origin.trim())
  : [
      'http://localhost:5173',
      'http://localhost:3001',
      'http://localhost:8081',
      'https://pennyanddebt.in',
      'https://www.pennyanddebt.in',
      'https://crmpennyanddebt.in'
    ];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Data sanitization
app.use(mongoSanitize());
app.use(hpp());

// Compression
app.use(compression());

// Static files
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// Health check
app.get('/health', (req, res) => {
  const mongoose = require('mongoose');
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development',
    mongodb: {
      connected: mongoose.connection.readyState === 1,
      state: ['disconnected', 'connected', 'connecting', 'disconnecting'][mongoose.connection.readyState]
    }
  });
});

// API Routes - Website (Public)
app.use('/api/v1/website/auth', require('./routes/website/auth'));
app.use('/api/v1/website/otp', require('./routes/website/otp'));
app.use('/api/v1/website/leads', require('./routes/website/leads'));
app.use('/api/v1/website/customers', require('./routes/website/customers'));
app.use('/api/v1/website/careers', require('./routes/website/careers'));
app.use('/api/v1/website/contacts', require('./routes/website/contacts'));
app.use('/api/v1/website/loan-applications', require('./routes/website/loanApplications'));
app.use('/api/v1/website/testimonials', require('./routes/website/testimonials'));
app.use('/api/v1/website/services', require('./routes/website/services'));
app.use('/api/v1/website/faqs', require('./routes/website/faqs'));
app.use('/api/v1/website/blogs', require('./routes/website/blogs'));

// API Routes - CRM (Internal)
const authMiddleware = require('../middleware/auth');

// Load CRM routes safely
function safeUse(mountPath, modulePath) {
  try {
    const r = require(modulePath);
    app.use(mountPath, r);
  } catch (err) {
    console.warn(`Warning: failed to load route ${modulePath} for ${mountPath}:`, err && err.code ? err.code : err.message);
  }
}

// Public CRM routes (no auth required)
safeUse('/api/v1/crm/auth', './routes/crm/auth');

// Protected CRM routes (auth required)
app.use('/api/v1/crm', authMiddleware);

safeUse('/api/v1/crm/dashboard', './routes/crm/dashboard');
safeUse('/api/v1/crm/leads', './routes/crm/leads');
safeUse('/api/v1/crm/customers', './routes/crm/customers');
safeUse('/api/v1/crm/applications', './routes/crm/applications');
safeUse('/api/v1/crm/employees', './routes/crm/employees');
safeUse('/api/v1/crm/cases', './routes/crm/cases');
safeUse('/api/v1/crm/loans', './routes/crm/loans');
safeUse('/api/v1/crm/programs', './routes/crm/programs');
safeUse('/api/v1/crm/settlements', './routes/crm/settlements');
safeUse('/api/v1/crm/payments', './routes/crm/payments');
safeUse('/api/v1/crm/tickets', './routes/crm/tickets');
safeUse('/api/v1/crm/mandates', './routes/crm/mandates');
safeUse('/api/v1/crm/tasks', './routes/crm/tasks');
safeUse('/api/v1/crm/documents', './routes/crm/documents');
safeUse('/api/v1/crm/reports', './routes/crm/reports');

// API Routes - Mobile
app.use('/api/v1/mobile/auth', require('./routes/mobile/auth'));
app.use('/api/v1/mobile/customer', require('./routes/mobile/customer'));
app.use('/api/v1/mobile/employee', require('./routes/mobile/employee'));

// Legacy routes (backward compatibility) - will be deprecated
app.use('/api/auth', require('./routes/website/auth'));
app.use('/api/otp', require('./routes/website/otp'));
app.use('/api/leads', require('./routes/website/leads'));
app.use('/api/customers', require('./routes/website/customers'));
app.use('/api/careers', require('./routes/website/careers'));
app.use('/api/contacts', require('./routes/website/contacts'));
app.use('/api/loan-applications', require('./routes/website/loanApplications'));

// CRM legacy routes (safe load)
safeUse('/api/crm/auth', './routes/crm/auth');
safeUse('/api/crm/dashboard', './routes/crm/dashboard');
safeUse('/api/crm/leads', './routes/crm/leads');
safeUse('/api/crm/customers', './routes/crm/customers');

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ 
    error: 'Route not found',
    path: req.originalUrl,
    method: req.method
  });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('Error:', err);
  
  const statusCode = err.statusCode || err.status || 500;
  const message = process.env.NODE_ENV === 'production' 
    ? 'Internal server error' 
    : err.message;
  
  res.status(statusCode).json({ 
    error: message,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
});

module.exports = app;
