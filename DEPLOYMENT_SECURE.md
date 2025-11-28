# Secure Deployment Checklist

## Pre-Deployment Security Audit

### 1. Code Review
- [ ] No hardcoded credentials in code
- [ ] All secrets in environment variables
- [ ] .env files in .gitignore
- [ ] No sensitive data in logs
- [ ] Error messages don't expose system details

### 2. Dependencies
- [ ] Run `npm audit` and fix vulnerabilities
- [ ] Update outdated packages
- [ ] Remove unused dependencies

```bash
cd backend
npm audit fix
npm outdated
```

### 3. Environment Variables

**Railway (Backend) - Required:**
```
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/pennydebt
JWT_SECRET=64_char_random_string
JWT_EXPIRES_IN=1d
REFRESH_TOKEN_SECRET=64_char_random_string
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=care@pennyanddebt.in
SMTP_PASS=app_password
NODE_ENV=production
PORT=5000
```

**Vercel (Frontend) - Required:**
```
VITE_API_BASE_URL=https://api.pennyanddebt.in
```

### 4. MongoDB Atlas Security

- [ ] Create application-specific user (not admin)
- [ ] Set user role to `readWrite` on specific database only
- [ ] Remove `0.0.0.0/0` from IP allowlist
- [ ] Add Railway IP addresses to allowlist
- [ ] Enable TLS/SSL (enabled by default)
- [ ] Enable continuous backups
- [ ] Enable database auditing (if available)

**Get Railway IPs:**
```bash
# Railway doesn't provide static IPs on free tier
# Options:
# 1. Use 0.0.0.0/0 with strong password (not ideal)
# 2. Upgrade to Railway Pro for static IPs
# 3. Use MongoDB Atlas's "Allow access from anywhere" temporarily
```

### 5. HTTPS/TLS

- [ ] Railway provides TLS automatically
- [ ] Vercel provides TLS automatically
- [ ] Custom domain has valid SSL certificate
- [ ] Force HTTPS redirects enabled

### 6. CORS Configuration

Edit `backend/middleware/security.js`:

```javascript
const allowedOrigins = [
  'https://pennyanddebt.in',
  'https://www.pennyanddebt.in',
  'https://crmpennyanddebt.in',
  'https://www.crmpennyanddebt.in'
  // Remove localhost in production
];
```

### 7. Rate Limiting

Current: 150 requests per 15 minutes per IP

Adjust in `backend/middleware/security.js` if needed:

```javascript
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 150, // adjust based on traffic
  message: { error: 'Too many requests, please try later.' }
});
```

### 8. File Upload Security

- [ ] Max file size: 5MB (configured)
- [ ] Allowed types: PDF, JPEG, PNG only
- [ ] Files stored in memory (not disk)
- [ ] Consider moving to S3/Spaces for production

### 9. Authentication & Authorization

- [ ] JWT tokens expire (1 day default)
- [ ] Refresh token strategy implemented
- [ ] Password hashing with bcrypt (12+ rounds)
- [ ] Role-based access control (RBAC) applied
- [ ] Admin routes protected with `authorize('admin')`

### 10. Input Validation

- [ ] All POST/PUT routes have validation middleware
- [ ] Email validation
- [ ] Phone number validation (Indian format)
- [ ] Numeric fields validated
- [ ] String length limits enforced

## Deployment Steps

### Step 1: Backend (Railway)

```bash
# 1. Push code to GitHub
git add .
git commit -m "Add security hardening"
git push origin main

# 2. Connect Railway to GitHub repo
# - Go to railway.app
# - New Project → Deploy from GitHub
# - Select Penny-Debt repo
# - Select backend/ directory

# 3. Set environment variables (see section 3 above)

# 4. Deploy
# Railway auto-deploys on push to main
```

### Step 2: Frontend (Vercel)

```bash
# 1. Connect Vercel to GitHub repo
# - Go to vercel.com
# - New Project → Import Git Repository
# - Select Penny-Debt repo
# - Root Directory: crm-frontend

# 2. Configure build settings
# Framework Preset: Vite
# Build Command: npm run build
# Output Directory: dist

# 3. Set environment variables
VITE_API_BASE_URL=https://your-backend.railway.app

# 4. Deploy
# Vercel auto-deploys on push to main
```

### Step 3: Custom Domain Setup

**Backend (Railway):**
1. Railway Settings → Domains
2. Add custom domain: `api.pennyanddebt.in`
3. Add CNAME record in your DNS:
   ```
   CNAME api.pennyanddebt.in → your-app.railway.app
   ```

**Frontend (Vercel):**
1. Vercel Settings → Domains
2. Add custom domain: `pennyanddebt.in` and `www.pennyanddebt.in`
3. Add DNS records:
   ```
   A     pennyanddebt.in → 76.76.21.21
   CNAME www.pennyanddebt.in → cname.vercel-dns.com
   ```

### Step 4: Test Production

```bash
# Health check
curl https://api.pennyanddebt.in/health

# Test CORS
curl -H "Origin: https://pennyanddebt.in" https://api.pennyanddebt.in/health

# Test rate limiting (run 151 times)
for i in {1..151}; do curl https://api.pennyanddebt.in/health; done

# Test authentication
curl -X POST https://api.pennyanddebt.in/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123"}'
```

## Post-Deployment Monitoring

### 1. Error Tracking (Sentry)

```bash
cd backend
npm install @sentry/node

# Add to server.js
const Sentry = require('@sentry/node');
Sentry.init({ dsn: process.env.SENTRY_DSN });
```

### 2. Logging

```bash
npm install morgan winston

# Add to server.js
const morgan = require('morgan');
app.use(morgan('combined'));
```

### 3. Uptime Monitoring

Use free services:
- UptimeRobot: https://uptimerobot.com
- Pingdom: https://www.pingdom.com
- Better Uptime: https://betteruptime.com

Monitor:
- `https://api.pennyanddebt.in/health`
- `https://pennyanddebt.in`

### 4. Database Monitoring

MongoDB Atlas provides:
- Real-time performance metrics
- Query performance insights
- Alerts for high CPU/memory
- Slow query logs

Set up alerts for:
- Connection spikes
- High CPU usage (>80%)
- Disk space (>80%)

## Security Maintenance

### Weekly
- [ ] Review Railway logs for errors
- [ ] Check MongoDB Atlas metrics
- [ ] Review failed login attempts

### Monthly
- [ ] Run `npm audit` and update packages
- [ ] Review and rotate API keys
- [ ] Test backup restoration
- [ ] Review access logs for anomalies

### Quarterly
- [ ] Rotate JWT secrets
- [ ] Rotate database passwords
- [ ] Review user permissions
- [ ] Security audit of new features

## Incident Response Plan

### If Credentials Leaked:
1. Immediately rotate all secrets (see SECRET_ROTATION_PLAN.md)
2. Check MongoDB Atlas audit logs
3. Review Railway logs for unauthorized access
4. Notify affected users if data breach occurred

### If DDoS Attack:
1. Railway has built-in DDoS protection
2. Increase rate limiting temporarily
3. Enable Cloudflare in front of Railway

### If Database Compromised:
1. Restore from MongoDB Atlas backup
2. Rotate all credentials
3. Review audit logs
4. Notify users

## Compliance Checklist

- [ ] GDPR: User data deletion endpoint
- [ ] GDPR: Data export endpoint
- [ ] Privacy policy published
- [ ] Terms of service published
- [ ] Cookie consent (if using cookies)
- [ ] Data encryption at rest (MongoDB Atlas default)
- [ ] Data encryption in transit (TLS)

## Performance Optimization

- [ ] Enable gzip compression (already configured)
- [ ] Add Redis caching for frequent queries
- [ ] Optimize MongoDB indexes
- [ ] Enable CDN for static assets (Vercel default)
- [ ] Lazy load images on frontend

## Final Checklist

- [ ] All secrets rotated
- [ ] Git history cleaned
- [ ] Security middleware deployed
- [ ] Authentication working
- [ ] Authorization working
- [ ] Input validation working
- [ ] Rate limiting working
- [ ] CORS configured correctly
- [ ] HTTPS enabled
- [ ] MongoDB secured
- [ ] Backups enabled
- [ ] Monitoring configured
- [ ] Error tracking configured
- [ ] Custom domains configured
- [ ] DNS records propagated
- [ ] Production tested
- [ ] Team notified
- [ ] Documentation updated

## Support Resources

- Railway Docs: https://docs.railway.app
- Vercel Docs: https://vercel.com/docs
- MongoDB Atlas Docs: https://docs.atlas.mongodb.com
- Express Security Best Practices: https://expressjs.com/en/advanced/best-practice-security.html
- OWASP Top 10: https://owasp.org/www-project-top-ten/
