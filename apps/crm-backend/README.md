# Penny-Debt Backend API v2.0

Modern Node.js + Express + MongoDB backend for Penny & Debt CRM system.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Setup environment
cp .env.example .env
# Edit .env with your credentials

# Start development server
npm run dev

# Start production server
npm start
```

## 📁 Project Structure

```
backend/
├── src/
│   ├── config/          # Configuration files
│   │   ├── db.js       # MongoDB connection
│   │   └── env.js      # Environment variables
│   ├── models/          # Mongoose models
│   ├── controllers/     # Request handlers
│   ├── middlewares/     # Express middlewares
│   ├── services/        # Business logic
│   ├── routes/          # API routes
│   │   ├── website/    # Public website routes
│   │   ├── crm/        # Internal CRM routes
│   │   └── mobile/     # Mobile app routes
│   ├── utils/           # Utility functions
│   ├── validations/     # Input validations
│   └── app.js           # Express app setup
├── tests/               # Test files
├── uploads/             # File uploads
├── server.js            # Entry point
└── package.json
```

## 🔌 API Endpoints

### Website API (`/api/v1/website/*`)

Public-facing APIs for the website:

- `POST /api/v1/website/auth/register` - User registration
- `POST /api/v1/website/auth/login` - User login
- `POST /api/v1/website/leads` - Submit lead
- `POST /api/v1/website/contacts` - Contact form
- `GET /api/v1/website/services` - Get services
- `GET /api/v1/website/testimonials` - Get testimonials
- `GET /api/v1/website/faqs` - Get FAQs
- `GET /api/v1/website/blogs` - Get blog posts

### CRM API (`/api/v1/crm/*`)

Internal APIs for employee dashboard:

- `POST /api/v1/crm/auth/login` - Employee login
- `GET /api/v1/crm/dashboard` - Dashboard stats
- `GET /api/v1/crm/leads` - Get all leads
- `GET /api/v1/crm/customers` - Get customers
- `GET /api/v1/crm/applications` - Get applications
- `GET /api/v1/crm/employees` - Get employees
- `GET /api/v1/crm/cases` - Get cases
- `GET /api/v1/crm/payments` - Get payments
- `GET /api/v1/crm/tasks` - Get tasks
- `GET /api/v1/crm/documents` - Get documents
- `GET /api/v1/crm/reports` - Get reports

### Mobile API (`/api/v1/mobile/*`)

Mobile app specific APIs:

- `POST /api/v1/mobile/auth/login` - Mobile login
- `POST /api/v1/mobile/auth/refresh-token` - Refresh token
- `GET /api/v1/mobile/customer/profile` - Customer profile
- `GET /api/v1/mobile/customer/cases` - Customer cases
- `GET /api/v1/mobile/employee/dashboard` - Employee dashboard
- `GET /api/v1/mobile/employee/tasks` - Employee tasks

### Legacy Routes (Backward Compatible)

Old routes still work:
- `/api/*` → Maps to `/api/v1/website/*`
- `/api/crm/*` → Maps to `/api/v1/crm/*`

## 🔐 Environment Variables

```env
# Server
NODE_ENV=development
PORT=5000
HOST=0.0.0.0

# Database
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/dbname

# JWT
JWT_SECRET=your-secret-key-change-in-production
JWT_EXPIRE=7d

# Session
SESSION_SECRET=your-session-secret

# Email (Gmail)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=care@pennyanddebt.in
SMTP_PASS=your-app-password
SMTP_FROM=care@pennyanddebt.in

# CORS
ALLOWED_ORIGINS=http://localhost:5173,http://localhost:3001

# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100

# File Upload
MAX_FILE_SIZE=5242880
UPLOAD_PATH=./uploads
```

## 🛡️ Security Features

- ✅ Helmet.js for security headers
- ✅ CORS protection
- ✅ Rate limiting
- ✅ MongoDB sanitization
- ✅ HPP protection
- ✅ JWT authentication
- ✅ Password hashing (bcrypt)
- ✅ Input validation
- ✅ HTTPS enforcement (production)

## 📦 Dependencies

### Core
- `express` - Web framework
- `mongoose` - MongoDB ODM
- `cors` - CORS middleware
- `dotenv` - Environment variables

### Security
- `helmet` - Security headers
- `express-rate-limit` - Rate limiting
- `express-mongo-sanitize` - NoSQL injection protection
- `hpp` - HTTP parameter pollution protection
- `bcryptjs` - Password hashing
- `jsonwebtoken` - JWT tokens

### Utilities
- `multer` - File uploads
- `nodemailer` - Email sending
- `compression` - Response compression
- `morgan` - HTTP logging
- `validator` - Input validation
- `winston` - Advanced logging
- `joi` - Schema validation

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests with coverage
npm run test:coverage

# Watch mode
npm run test:watch
```

## 📊 Monitoring

### Health Check

```bash
GET /health
```

Response:
```json
{
  "status": "OK",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "environment": "development",
  "mongodb": {
    "connected": true,
    "state": "connected"
  }
}
```

## 🚀 Deployment

### Render

```bash
# Deploy to Render
git push origin main
```

### Docker

```bash
# Build image
docker build -f ../infra/docker/backend.Dockerfile -t penny-debt-backend .

# Run container
docker run -p 5000:5000 --env-file .env penny-debt-backend
```

## 🔧 Development

### Code Style

```bash
# Lint code
npm run lint

# Format code
npm run format
```

### Database

```bash
# Connect to MongoDB
node scripts/mongo-ping.js

# Initialize database
node scripts/initDatabase.js
```

## 📝 API Documentation

Full API documentation available at:
- Development: http://localhost:5000/api-docs
- Production: https://api.pennyanddebt.in/api-docs

## 🤝 Contributing

1. Create feature branch
2. Make changes
3. Run tests
4. Submit pull request

## 📞 Support

- Email: care@pennyanddebt.in
- Documentation: [PROJECT_STRUCTURE.md](../PROJECT_STRUCTURE.md)
- Migration Guide: [MIGRATION_GUIDE.md](../MIGRATION_GUIDE.md)
