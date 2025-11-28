const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ Connected to MongoDB Atlas'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// Security middleware with CSP (no 'unsafe-eval').
// We'll collect any remaining violations via a report-only header in production.
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'", "https://vercel.live", "https://*.vercel.com"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      imgSrc: ["'self'", "data:", "https:"],
      fontSrc: ["'self'", "data:", "https:"],
      connectSrc: ["'self'", "https:", "http://localhost:*"] ,
      mediaSrc: ["'self'"],
      objectSrc: ["'none'"]
    }
  }
}));

// Add a Report-Only CSP header in production to collect violation reports
// without weakening the enforced policy. Reports are sent to `/api/csp-report`.
if (process.env.NODE_ENV === 'production') {
  const reportOnlyHeader = [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' https://vercel.live https://*.vercel.com",
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: https:",
    "font-src 'self' data: https:",
    "connect-src 'self' https: http://localhost:*",
    "object-src 'none'",
    "report-uri /api/csp-report"
  ].join('; ');

  app.use((req, res, next) => {
    res.setHeader('Content-Security-Policy-Report-Only', reportOnlyHeader);
    next();
  });
}
// CORS: allow configured frontend URL, common dev ports (Vite 5173, CRA 3000), and other localhost ports
const allowedOrigins = [
  'https://penny-debt-crm.vercel.app',
  'https://pennyanddebt.in',
  'https://www.pennyanddebt.in',
  'https://crmpennyanddebt.in',
  'https://www.crmpennyanddebt.in',
  'http://localhost:5173', 
  'http://localhost:3000',
  'http://localhost:3001',
  'http://localhost:5000'
].filter(Boolean);
app.use(cors({
  origin: (origin, callback) => {
    // allow requests with no origin (e.g., mobile apps, curl, server-to-server)
    if (!origin) return callback(null, true);
    // allow explicit origins or any localhost with any port
    if (allowedOrigins.includes(origin) || /^https?:\/\/localhost(:\d+)?$/.test(origin)) {
      return callback(null, true);
    }
    return callback(new Error('CORS policy: Origin not allowed'), false);
  },
  credentials: true
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

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
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    routes: ['auth', 'otp', 'leads', 'customers', 'careers', 'loan-applications', 'csp-report', 'contacts'],
    mongodb: {
      connected: mongoose.connection.readyState === 1,
      state: mongoose.connection.readyState,
      uri_set: !!process.env.MONGODB_URI
    }
  });
});

// Error handling middleware
// ignore unused `next` parameter required by Express error handler
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, _next) => {
  console.error(err.stack);
  res.status(500).json({ 
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'development' ? err.message : {}
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || '0.0.0.0';

app.listen(PORT, HOST, () => {
  console.log(`Server running on ${HOST}:${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`MongoDB URI set: ${!!process.env.MONGODB_URI}`);
  console.log(`MongoDB connection state: ${mongoose.connection.readyState}`);
});