# DEPLOYMENT VERIFICATION CHECKLIST

## Before Going Live

### 1. Environment Variables - Vercel Frontend
- [ ] `VITE_API_BASE_URL` = `https://[your-render-backend-url]` (e.g., `https://penny-debt-api.onrender.com`)
- [ ] Domain mapping: `pennyanddebt.in` and `www.pennyanddebt.in` point to Vercel
- [ ] CRM subdomain: `crmpennyanddebt.in` points to Vercel (same deployment)

### 2. Environment Variables - Render Backend
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database
NODE_ENV=production
PORT=5000
HOST=0.0.0.0
JWT_SECRET=[secure-random-string]
FRONTEND_URL=https://pennyanddebt.in,https://crmpennyanddebt.in,https://www.pennyanddebt.in,https://www.crmpennyanddebt.in
EMAIL_HOST=smtp.[your-email-provider]
EMAIL_PORT=587
EMAIL_USER=[your-email]
EMAIL_PASS=[your-app-password]
EMAIL_FROM=noreply@pennyanddebt.in
```

### 3. MongoDB Setup
- [ ] Database created in MongoDB Atlas
- [ ] Collections exist: `customers`, `employees`, `otps`, `leads`, `careers`
- [ ] Indexes created on: `customers.email`, `otps.email`
- [ ] IP whitelist includes Render IP or set to 0.0.0.0

### 4. Backend Server Tests

#### 4a. Health Check
```bash
curl https://[your-render-url]/health
# Expected: {"status":"healthy","timestamp":"..."}
```

#### 4b. Employee Login
```bash
curl -X POST https://[your-render-url]/api/auth/employee-login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@pennyanddebt.in","password":"PennyAdmin@2024#Secure"}'
# Expected: {"success":true,"user":{...},"message":"Login successful"}
```

#### 4c. Customer Signup
```bash
curl -X POST https://[your-render-url]/api/customers/signup \
  -H "Content-Type: application/json" \
  -d '{
    "full_name":"Test User",
    "email":"test@example.com",
    "password":"TestPass123!",
    "mobile":"9876543210"
  }'
# Expected: {"message":"Customer created successfully","customerId":"..."}
```

#### 4d. Customer Login
```bash
curl -X POST https://[your-render-url]/api/customers/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"TestPass123!"}'
# Expected: {"message":"Login successful","token":"...","user":{...}}
```

#### 4e. OTP Send
```bash
curl -X POST https://[your-render-url]/api/otp/send-otp \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","name":"Test User"}'
# Expected: {"message":"OTP sent successfully"}
```

### 5. Frontend Tests - Using Browser DevTools

#### 5a. Network Tab Check
1. Go to `https://crmpennyanddebt.in`
2. Open DevTools → Network tab
3. Try Employee Login with: `admin@pennyanddebt.in` / `PennyAdmin@2024#Secure`
4. Check network request to `/api/auth/employee-login`
   - [ ] Request goes to correct URL (should be `[render-url]/api/auth/employee-login`)
   - [ ] Status code is 200 or 401 (not 404, not CORS error)
   - [ ] Response contains `success: true` or error message

#### 5b. Customer Signup Flow
1. Go to Customer Signup page
2. Fill in form with test data
3. Check network request to `/api/customers/signup`
   - [ ] Status code is 200 or 400 (not 404, not CORS error)
   - [ ] Response contains success message or validation error

#### 5c. Customer Login Flow
1. Go to Customer Login page
2. Use credentials from signup test
3. Check network request to `/api/customers/login`
   - [ ] Status code is 200 or 401 (not 404, not CORS error)
   - [ ] Response contains token on success

#### 5d. CORS Check
- [ ] No "Access to XMLHttpRequest blocked by CORS policy" errors
- [ ] Response headers include `access-control-allow-origin: https://crmpennyanddebt.in`

### 6. Dual-Domain Flow Test
1. [ ] Visit `https://pennyanddebt.in` (website)
2. [ ] Click login button
3. [ ] Redirect to `https://crmpennyanddebt.in` (CRM subdomain)
4. [ ] Login works on CRM subdomain
5. [ ] Same Vercel deployment serves both domains

### 7. Login Flows End-to-End

#### 7a. Employee Login
- [ ] Can login with: `admin@pennyanddebt.in` / `PennyAdmin@2024#Secure`
- [ ] Can login with: `manager@pennyanddebt.in` / `DebtManager$2024!Strong`
- [ ] Redirects to employee dashboard on success
- [ ] Shows error message on wrong password
- [ ] Shows error message on nonexistent email

#### 7b. Customer Signup → Login
- [ ] Can create new customer account
- [ ] Password is stored securely (checked: bcrypt hash in database)
- [ ] Cannot login with wrong password
- [ ] Can login with correct email and password
- [ ] Redirects to customer dashboard on success

#### 7c. Customer Forgot Password (if implemented)
- [ ] OTP sends successfully
- [ ] OTP can be verified
- [ ] Password resets after OTP verification

### 8. Database Verification

#### 8a. Check Customer Password Storage
```javascript
// In MongoDB Compass or Atlas UI:
db.customers.findOne({ email: 'test@example.com' })
// Should show: { ..., passwordHash: "$2b$12$..." }
```

#### 8b. Check OTP Expiry
- [ ] OTP expires after 5 minutes
- [ ] Expired OTP cannot be verified
- [ ] New OTP can be requested

### 9. Error Handling

#### 9a. Network Errors
- [ ] Show user-friendly error message if backend unreachable
- [ ] Don't crash app if API calls fail
- [ ] Display retry option

#### 9b. Validation Errors
- [ ] Invalid email format shows error
- [ ] Weak password shows error
- [ ] Missing required fields shows error
- [ ] Duplicate email shows error on signup

#### 9c. Auth Errors
- [ ] Wrong password shows "Invalid credentials"
- [ ] Nonexistent email shows "User not found"
- [ ] Expired token redirects to login

### 10. Performance Checks

- [ ] Login response time < 2 seconds
- [ ] Signup response time < 2 seconds
- [ ] No memory leaks in browser console
- [ ] No slow network requests (check waterfall in DevTools)
- [ ] Frontend builds successfully without warnings

### 11. Security Checklist

- [ ] Passwords stored as bcrypt hashes (not plaintext)
- [ ] CORS only allows production domains
- [ ] JWT tokens used for session management
- [ ] Email validation prevents most attacks
- [ ] Rate limiting considered (if needed)
- [ ] HTTPS enforced on all domains

### 12. Monitoring Setup

- [ ] Render backend error logs monitored
- [ ] Vercel deployment logs checked
- [ ] MongoDB Atlas alerts configured
- [ ] Email delivery monitored (Nodemailer logs)
- [ ] Uptime monitor configured for health endpoint

## After Go-Live

### Daily Checks
- [ ] Backend health endpoint responds (automated monitoring)
- [ ] No spike in error rates
- [ ] Login success rate > 95%
- [ ] No CORS errors in browser console
- [ ] MongoDB connection stable

### Weekly Checks
- [ ] Review backend error logs
- [ ] Check database size growth
- [ ] Verify OTP delivery success rate
- [ ] Review failed login attempts (possible abuse)
- [ ] Test backup/restore procedures

### Monthly Checks
- [ ] Review performance metrics
- [ ] Update dependencies if needed
- [ ] Audit user access logs
- [ ] Review email delivery failures
- [ ] Performance optimization if needed

## Quick Troubleshooting Reference

### Login shows "Cannot reach server"
1. Check VITE_API_BASE_URL in Vercel dashboard
2. Check backend is running on Render
3. Check MONGODB_URI is correct
4. Check /health endpoint responds

### "CORS policy blocked this request"
1. Check frontend domain in CORS allowlist on backend
2. Verify www variants included if needed
3. Check FRONTEND_URL env var set correctly

### "Invalid credentials" even with correct password
1. Check password is stored as bcrypt hash in MongoDB
2. Verify passwordHash field exists in Customer model
3. Check bcrypt dependency installed on backend

### Customer signup works but login fails
1. Check passwordHash field is saved during signup
2. Verify bcrypt.compare() is checking correct field
3. Check error logs on backend for details

### OTP not sending
1. Check EMAIL_HOST, EMAIL_PORT, EMAIL_USER in env vars
2. Verify email provider app password set correctly
3. Check MongoDB OTP collection exists
4. Review Render logs for email errors

### Backend crashes on startup
1. Check all required env vars set
2. Verify MongoDB URI is correct and accessible
3. Check Node version compatible (14+ required)
4. Review Render logs for specific error

## Testing Commands

```bash
# Run local test suite
node test-production.js

# Test with custom API URL
API_BASE_URL=https://your-render-url.onrender.com node test-production.js

# Curl tests for backend
curl -X POST https://[render-url]/api/auth/employee-login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@pennyanddebt.in","password":"PennyAdmin@2024#Secure"}'

# Check CORS headers
curl -X OPTIONS https://[render-url]/api/auth/employee-login \
  -H "Origin: https://crmpennyanddebt.in" \
  -H "Access-Control-Request-Method: POST" \
  -v
```

---

**Status:** All code fixes complete. Use this checklist to verify everything works end-to-end before declaring production deployment successful.
