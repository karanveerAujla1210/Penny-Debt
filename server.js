const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// MongoDB Connection — use environment variable, never commit credentials
const uri = process.env.MONGODB_URI;
if (!uri) {
  console.warn('MONGODB_URI not set — skipping DB connection. Set MONGODB_URI in your .env to connect.');
} else {
  mongoose.connect(uri)
    .then(() => console.log('MongoDB Connected Successfully!'))
    .catch(err => console.error('MongoDB connection error:', err));
}

// Middleware
const allowedOrigins = [process.env.FRONTEND_URL, 'http://localhost:3001', 'http://localhost:5173'].filter(Boolean);
app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin) || /^https?:\/\/localhost(:\d+)?$/.test(origin)) {
      return callback(null, true);
    }
    if (process.env.NODE_ENV === 'production') {
      return callback(new Error('CORS: Origin not allowed'), false);
    }
    // Allow all in development
    callback(null, true);
  },
  credentials: true
}));
app.use(express.json());

// Trust proxy (for Render/Railway where requests come through a reverse proxy)
app.set('trust proxy', 1);

// Health check
app.get('/', (req, res) => {
  res.json({ 
    message: 'Penny Debt CRM Backend API',
    status: 'OK',
    timestamp: new Date().toISOString()
  });
});

app.get('/health', (req, res) => {
  res.json({ status: 'OK' });
});

// API Routes
app.use('/api/leads', require('./routes/leads'));
app.use('/api/users', require('./routes/users'));
app.use('/api/customers', require('./routes/customers'));
app.use('/api/contacts', require('./routes/contacts'));
app.use('/api/careers', require('./routes/careers'));

// Database initialization endpoint
app.post('/api/init-db', async (req, res) => {
  try {
    const { exec } = require('child_process');
    exec('node scripts/initDatabase.js', (error, stdout, stderr) => {
      if (error) {
        console.error('Init DB Error:', error);
        return res.status(500).json({ success: false, error: error.message });
      }
      console.log('Init DB Output:', stdout);
      res.json({ success: true, message: 'Database initialized successfully', output: stdout });
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Database connection test
app.get('/api/db-test', async (req, res) => {
  try {
    const connectDB = require('./database');
    const db = await connectDB();
    const collections = await db.listCollections().toArray();
    res.json({ 
      success: true, 
      message: 'Database connected successfully',
      collections: collections.map(c => c.name)
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Basic API routes
app.get('/api/test', (req, res) => {
  res.json({ message: 'API is working!' });
});

const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || '0.0.0.0';

app.listen(PORT, HOST, () => {
  console.log(`Server running on ${HOST}:${PORT} (${process.env.NODE_ENV || 'development'})`);
});