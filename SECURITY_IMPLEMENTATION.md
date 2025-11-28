# Security Implementation Guide

## Part A: Install New Dependencies

```bash
cd backend
npm install express-mongo-sanitize hpp compression
```

## Part B: Apply Backend Changes

### 1. Replace server.js
```bash
# Backup current server
cp server.js server-OLD.js

# Replace with secure version
cp server-SECURE.js server.js
```

### 2. Update package.json
```bash
cp package-UPDATED.json package.json
npm install
```

### 3. Files Created (Already Done)
- ✅ `middleware/security.js` - Helmet, CORS, rate limiting, sanitization
- ✅ `middleware/auth.js` - JWT authentication + RBAC
- ✅ `middleware/validation.js` - Input validation rules
- ✅ `middleware/fileUpload.js` - Secure file upload
- ✅ `config/database.js` - Secure MongoDB connection

## Part C: Protect Your Routes

### Example: Protect applications route

Edit `routes/applications.js`:

```javascript
const { authenticate, authorize } = require('../middleware/auth');
const { validateApplication } = require('../middleware/validation');

// Public route (no auth)
router.post('/submit', validateApplication, submitApplication);

// Protected routes (require auth)
router.get('/', authenticate, authorize('admin', 'employee'), getAllApplications);
router.get('/:id', authenticate, getApplicationById);
router.put('/:id/settle', authenticate, authorize('admin', 'employee'), settleApplication);
```

### Example: Protect leads route

Edit `routes/leads.js`:

```javascript
const { authenticate, authorize } = require('../middleware/auth');
const { validateLead } = require('../middleware/validation');

router.post('/submit', validateLead, submitLead); // public
router.get('/', authenticate, authorize('admin', 'employee'), getAllLeads); // protected
```

## Part D: Update Auth Routes to Issue JWT

Edit `routes/auth.js` to return JWT tokens:

```javascript
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  
  // Find user (adjust to your User model)
  const user = await User.findOne({ email });
  if (!user) return res.status(401).json({ error: 'Invalid credentials' });
  
  // Verify password
  const match = await bcrypt.compare(password, user.passwordHash);
  if (!match) return res.status(401).json({ error: 'Invalid credentials' });
  
  // Generate token
  const token = jwt.sign(
    { id: user._id, role: user.role, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN || '1d' }
  );
  
  res.json({ token, user: { id: user._id, email: user.email, role: user.role } });
});
```

## Part E: Test Security

```bash
# Start server
npm run dev

# Test health check
curl http://localhost:5000/health

# Test protected route (should fail without token)
curl http://localhost:5000/api/applications

# Test with token
curl -H "Authorization: Bearer YOUR_TOKEN" http://localhost:5000/api/applications
```

## Part F: Deploy to Railway

1. Push changes to GitHub
2. Railway will auto-deploy
3. Set environment variables in Railway dashboard:
   - `MONGODB_URI`
   - `JWT_SECRET`
   - `JWT_EXPIRES_IN`
   - `SMTP_HOST`, `SMTP_USER`, `SMTP_PASS`
   - `NODE_ENV=production`

## Summary of Changes

✅ Helmet security headers  
✅ CORS restricted to your domains  
✅ Rate limiting (150 req/15min)  
✅ MongoDB injection protection  
✅ XSS protection  
✅ Parameter pollution protection  
✅ JWT authentication middleware  
✅ Role-based authorization  
✅ Input validation  
✅ Secure file uploads  
✅ Secure MongoDB connection  
