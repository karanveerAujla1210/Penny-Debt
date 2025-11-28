const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const cors = require('cors');
const mongoSanitize = require('express-mongo-sanitize');
const hpp = require('hpp');
const compression = require('compression');

function setupSecurity(app) {
  // 1. Helmet - secure headers
  app.use(helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "'unsafe-inline'", "https://vercel.live", "https://*.vercel.com"],
        styleSrc: ["'self'", "'unsafe-inline'"],
        imgSrc: ["'self'", "data:", "https:"],
        fontSrc: ["'self'", "data:", "https:"],
        connectSrc: ["'self'", "https:", "http://localhost:*"],
        mediaSrc: ["'self'"],
        objectSrc: ["'none'"]
      }
    },
    hsts: { maxAge: 31536000, includeSubDomains: true, preload: true },
    frameguard: { action: 'deny' },
    noSniff: true,
    xssFilter: true
  }));

  // 2. CORS - restrict to allowed domains
  const allowedOrigins = [
    'https://pennyanddebt.in',
    'https://www.pennyanddebt.in',
    'https://crmpennyanddebt.in',
    'https://www.crmpennyanddebt.in',
    'https://penny-debt-crm.vercel.app'
  ];

  app.use(cors({
    origin: function(origin, callback) {
      if (!origin) return callback(null, true); // mobile/native
      if (allowedOrigins.includes(origin) || /^https?:\/\/localhost(:\d+)?$/.test(origin)) {
        callback(null, true);
      } else {
        callback(new Error('CORS policy: Origin not allowed'));
      }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true,
    maxAge: 86400
  }));

  // 3. Rate limiting
  app.set('trust proxy', 1);
  const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 150,
    standardHeaders: true,
    legacyHeaders: false,
    message: { error: 'Too many requests, please try later.' }
  });
  app.use(limiter);

  // 4. Body parsing with size limits
  app.use(require('express').json({ limit: '10kb' }));
  app.use(require('express').urlencoded({ extended: true, limit: '10kb' }));

  // 5. Data sanitization
  app.use(mongoSanitize()); // remove $ and . from req
  app.use(hpp()); // prevent parameter pollution

  // 6. Compression
  app.use(compression());
}

module.exports = { setupSecurity };
