# Production Vercel + Render Setup Guide

## Critical: Vercel Environment Variables

Go to your Vercel project dashboard → Settings → Environment Variables

**Add these environment variables:**

```
VITE_API_BASE_URL=https://your-render-backend.onrender.com
```

**For different environments:**
- **Production**: `VITE_API_BASE_URL=https://your-render-backend.onrender.com`
- **Preview**: `VITE_API_BASE_URL=https://your-render-backend.onrender.com`
- **Development**: `VITE_API_BASE_URL=http://localhost:5000` (for local dev only)

## Critical: Render Backend Environment Variables

Go to your Render dashboard → Your Service → Environment

**Add these environment variables:**

```
MONGODB_URI=mongodb+srv://user:password@cluster.mongodb.net/pennydebt?retryWrites=true&w=majority
NODE_ENV=production
PORT=5000
JWT_SECRET=your-super-secret-key-here
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=care@pennyanddebt.in
EMAIL_PASS=your-app-specific-password
FRONTEND_URL=https://pennyanddebt.in
```

## Flow Explanation

```
User visits pennyanddebt.in (Website)
    ↓
Frontend served by Vercel
    ↓
User clicks Login button
    ↓
Redirects to crmpennyanddebt.in (CRM)
    ↓
Same Vercel frontend (different domain)
    ↓
Login component makes API call to backend
    ↓
Uses VITE_API_BASE_URL env var → Render backend
    ↓
Backend authenticates via MongoDB
    ↓
Returns token/user data
    ↓
Login successful, redirect to dashboard
```

## Login Flow - Employee

1. User visits `crmpennyanddebt.in/login`
2. Frontend loads WorkingLogin component
3. User enters credentials: `admin@pennyanddebt.in` / `PennyAdmin@2024#Secure`
4. Component reads `VITE_API_BASE_URL` from env
5. Calls `{VITE_API_BASE_URL}/api/auth/employee-login`
6. Backend verifies credentials from hardcoded employee accounts
7. Returns success response with user role
8. Frontend stores in localStorage
9. Redirects to dashboard

## Login Flow - Customer Signup

1. User visits `pennyanddebt.in/signup`
2. Enters full name, email, password, mobile
3. Signup component reads `VITE_API_BASE_URL`
4. POSTs to `{VITE_API_BASE_URL}/api/customers/signup`
5. Backend validates and stores in MongoDB
6. Returns success message
7. User can then login with credentials

## Login Flow - Customer Login

1. User visits `crmpennyanddebt.in/customer-login`
2. Enters email and password
3. CustomerLogin component reads `VITE_API_BASE_URL`
4. POSTs to `{VITE_API_BASE_URL}/api/customers/login`
5. Backend looks up customer in MongoDB
6. Compares password with bcrypt hash
7. Returns token and user data
8. Frontend stores in localStorage
9. Redirects to customer dashboard

## Debugging Production Issues

### Issue: Login fails with "Network error"

**Causes:**
1. `VITE_API_BASE_URL` not set in Vercel
2. Backend not running on Render
3. CORS issue - domain not whitelisted

**Solution:**
```bash
# Check Vercel env vars
# Go to Vercel dashboard → Project Settings → Environment Variables
# Verify VITE_API_BASE_URL is set

# Check Render backend
curl https://your-render-backend.onrender.com/health
# Should return: {"status":"OK"}

# Test login endpoint
curl -X POST https://your-render-backend.onrender.com/api/auth/employee-login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@pennyanddebt.in","password":"PennyAdmin@2024#Secure"}'
```

### Issue: CORS error in browser console

**Solution:**
Check `backend/server.js` - ensure both domains are in CORS allowlist:
- `https://pennyanddebt.in`
- `https://www.pennyanddebt.in`
- `https://crmpennyanddebt.in`
- `https://www.crmpennyanddebt.in`

### Issue: Customer signup works but login fails

**Possible causes:**
1. Password hash not stored correctly
2. Customer model missing `passwordHash` field
3. Backend `/api/customers/login` endpoint not implemented

**Solution:**
Verify backend has customer login endpoint. It should:
1. Validate email and password input
2. Find customer in MongoDB
3. Use bcrypt to compare passwords
4. Return token on success

## Testing Checklist

- [ ] Website loads at `https://pennyanddebt.in`
- [ ] CRM loads at `https://crmpennyanddebt.in`
- [ ] Employee login works with hardcoded credentials
- [ ] Customer signup creates record in MongoDB
- [ ] Customer login works with signup credentials
- [ ] Backend health check responds: `curl {BACKEND_URL}/health`
- [ ] No CORS errors in browser console
- [ ] No network timeouts (check Render free plan cold starts)

## Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| "Cannot GET /" on Vercel | Check buildCommand and outputDirectory in vercel.json |
| "CORS policy" error | Verify backend CORS allowlist includes your domain |
| 504 timeout on first request | Render free tier has cold starts; might take 30s first load |
| "Cannot find module" error | Run `npm install` in backend/; check Procfile |
| Login always fails | Check backend logs in Render dashboard; verify MongoDB connection |

## File Changes Made

1. **frontend/src/pages/Auth/WorkingLogin.jsx** - Uses `VITE_API_BASE_URL` env var
2. **frontend/src/pages/Auth/CustomerLogin.jsx** - Uses `VITE_API_BASE_URL` env var
3. **backend/server.js** - Added CORS support for both domain variations
4. **backend/routes/customers.js** - Added `/login` endpoint with bcrypt validation
5. **.env.example** - Updated with production URLs and Vercel env var guidance
6. **vercel.json** - Already configured correctly

## Next Steps

1. **Deploy to Vercel:**
   ```bash
   git push origin main
   # or manually trigger deploy in Vercel dashboard
   ```

2. **Set Vercel Environment Variables:**
   - Go to Vercel → Project Settings → Environment Variables
   - Add: `VITE_API_BASE_URL` = `https://your-render-backend.onrender.com`

3. **Verify Render Backend:**
   - Ensure all env vars are set in Render dashboard
   - Check backend is running: `curl {backend-url}/health`

4. **Test Login:**
   - Visit `https://crmpennyanddebt.in/login`
   - Use: `admin@pennyanddebt.in` / `PennyAdmin@2024#Secure`
   - Should redirect to admin dashboard on success

## Support

If issues persist:
1. Check Vercel build logs
2. Check Render deployment logs
3. Open browser DevTools → Network tab → test login
4. Check browser console for errors
5. Verify MongoDB Atlas cluster is running and whitelisted Render IP
