# 🚀 Quick Start: Apply Security in 15 Minutes

## Step 1: Install Dependencies (2 min)

```bash
cd backend
npm install express-mongo-sanitize hpp compression
```

## Step 2: Apply Code Changes (3 min)

```bash
# Backup current server
copy server.js server-OLD.js

# Replace with secure version
copy server-SECURE.js server.js

# Update package.json
copy package-UPDATED.json package.json
```

## Step 3: Protect Routes (5 min)

### Example: Protect `routes/applications.js`

Add at top:
```javascript
const { authenticate, authorize } = require('../middleware/auth');
const { validateApplication } = require('../middleware/validation');
```

Update routes:
```javascript
// Public
router.post('/submit', validateApplication, submitApplication);

// Protected (admin/employee only)
router.get('/', authenticate, authorize('admin', 'employee'), getAllApplications);
router.put('/:id', authenticate, authorize('admin'), updateApplication);
```

### Example: Protect `routes/leads.js`

```javascript
const { authenticate, authorize } = require('../middleware/auth');
const { validateLead } = require('../middleware/validation');

router.post('/submit', validateLead, submitLead); // public
router.get('/', authenticate, authorize('admin', 'employee'), getAllLeads); // protected
```

## Step 4: Test Locally (2 min)

```bash
npm run dev

# In another terminal
curl http://localhost:5000/health
```

## Step 5: Git Cleanup (3 min)

```bash
# Add to .gitignore
echo .env >> .gitignore
echo backend/.env >> .gitignore
echo EMPLOYEE_CREDENTIALS.md >> .gitignore
echo ADMIN_ACCESS.md >> .gitignore

# Remove from tracking
git rm --cached .env backend/.env EMPLOYEE_CREDENTIALS.md ADMIN_ACCESS.md crm-backend.zip

# Commit
git add .
git commit -m "Add security hardening and remove sensitive files"
git push origin main
```

## Step 6: Rotate Secrets (See SECRET_ROTATION_PLAN.md)

**Critical:** Follow SECRET_ROTATION_PLAN.md to:
1. Purge Git history with BFG
2. Rotate MongoDB password
3. Generate new JWT secrets
4. Update Railway environment variables

## Done! ✅

Your backend now has:
- ✅ Helmet security headers
- ✅ CORS protection
- ✅ Rate limiting
- ✅ MongoDB injection protection
- ✅ XSS protection
- ✅ JWT authentication
- ✅ Role-based authorization
- ✅ Input validation

## Next Steps

1. Complete SECRET_ROTATION_PLAN.md (CRITICAL)
2. Review DEPLOYMENT_SECURE.md for production deployment
3. Set up monitoring (Sentry, UptimeRobot)
4. Enable MongoDB backups
5. Test all protected routes

## Need Help?

- Backend security: See SECURITY_IMPLEMENTATION.md
- Secret rotation: See SECRET_ROTATION_PLAN.md
- Deployment: See DEPLOYMENT_SECURE.md
