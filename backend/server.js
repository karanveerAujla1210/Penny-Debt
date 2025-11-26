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

// Security middleware
app.use(helmet());
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

// Health check
app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    routes: ['auth', 'otp', 'leads', 'customers', 'careers']
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
});