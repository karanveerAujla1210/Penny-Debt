# Penny Debt CRM — Production Deployment Checklist

## Pre-Deployment

### 1. Verify Code is Ready
- [ ] All changes committed to `fix/mongo-integration` branch
- [ ] ESLint passes (0 errors): `npm run lint` in `crm-frontend`
- [ ] Backend tests pass (if any): `npm test` in root
- [ ] No hard-coded credentials in code (check `.gitignore` includes `.env`)

### 2. Prepare MongoDB
- [ ] MongoDB Atlas cluster created and running
- [ ] Database user created with strong password (special chars URL-encoded in URI)
- [ ] IP whitelist updated to allow Render IPs (or `0.0.0.0/0` for testing)
- [ ] Connection string copied to a secure location: `mongodb+srv://<user>:<pass>@cluster0.mongodb.net/pennydebt?...`

### 3. Prepare Environment Variables
- [ ] `MONGODB_URI` — MongoDB connection string
- [ ] `JWT_SECRET` — Long random string (min 32 chars)
- [ ] `EMAIL_USER` — Gmail address for sending emails
- [ ] `EMAIL_PASS` — Gmail app-specific password (not regular password)
- [ ] `FRONTEND_URL` — Production frontend URL (e.g., `https://penny-debt-crm-frontend.render.app`)
- [ ] `SUPABASE_URL` and `SUPABASE_KEY` (if using Supabase)

---

## Deployment on Render

### Backend Service

1. **Create Web Service on Render**
   - Go to [render.com](https://render.com)
   - Click **New +** → **Web Service**
   - Select repository `penny-debt-crm`
   - Set **Root Directory**: `.` (root of repo where `server.js` is)
   - Set **Build Command**: `npm install`
   - Set **Start Command**: `npm start`
   - Branch: `fix/mongo-integration`

2. **Add Environment Variables**
   - Go to **Settings** → **Environment**
   - Add the variables from the "Prepare Environment Variables" section above
   - Ensure `NODE_ENV=production`

3. **Deploy**
   - Click **Create Web Service**
   - Render will start building and deploying
   - Monitor logs for any errors
   - Backend URL: `https://<service-name>.render.app`

### Frontend Static Site

1. **Create Static Site on Render**
   - Click **New +** → **Static Site**
   - Select repository `penny-debt-crm`
   - Set **Root Directory**: `crm-frontend`
   - Set **Build Command**: `npm install && npm run build`
   - Set **Publish Directory**: `dist`
   - Branch: `fix/mongo-integration`

2. **Add Environment Variables**
   - Go to **Settings** → **Environment**
   - Add `VITE_API_BASE_URL=https://<backend-service-name>.render.app`

3. **Deploy**
   - Click **Create Static Site**
   - Render will build and deploy automatically
   - Frontend URL: `https://<frontend-site-name>.render.app`

---

## Post-Deployment Verification

### 1. Backend Health Checks
```bash
# Test health endpoint
curl https://<backend-service>.render.app/health

# Test API endpoint
curl https://<backend-service>.render.app/api/test

# Expected response: { "message": "API is working!" }
```

### 2. Frontend Smoke Tests
1. Navigate to `https://<frontend-site>.render.app`
2. Test signup flow (if database is connected)
3. Check browser console for network errors
4. Verify API calls are reaching backend (use Network tab in DevTools)

### 3. Database Connectivity
- Backend logs should show `MongoDB Connected Successfully!`
- Check MongoDB Atlas dashboard for active connections

---

## Troubleshooting

### Backend not starting
- Check Render logs for error message
- Verify `MONGODB_URI` is correct (special chars must be URL-encoded)
- Test `npm start` locally with the same env vars
- Ensure `NODE_ENV=production` is set

### Frontend can't reach backend
- Check `VITE_API_BASE_URL` is set correctly in Render environment
- Verify CORS is configured (backend should allow frontend domain)
- Use browser DevTools → Network tab to inspect the failed request
- Check backend logs for CORS rejection

### Emails not sending
- Verify `EMAIL_USER` and `EMAIL_PASS` are correct
- Ensure Gmail app-specific password is used (not regular password)
- Check that 2FA is enabled on Gmail account
- Test email locally first

### Build failure
- Check Render logs for specific error
- Run `npm install && npm run build` locally in the same directory to reproduce
- Verify all dependencies are listed in `package.json`

---

## Monitoring & Maintenance

### Logs
- Backend: Render dashboard → Service → Logs
- Frontend: Render dashboard → Static Site → Logs

### Alerts
- Set up email alerts in Render for failed deploys or service restarts
- Monitor MongoDB Atlas for connection spikes or errors

### Updates
- To deploy new changes: push to `fix/mongo-integration` branch
- Render automatically redeploys on push
- Monitor logs during redeployment

---

## Rollback
If deployment fails:
1. In Render dashboard, go to the service
2. Click **Settings** → **Deploys**
3. Select a previous successful deploy and click **Redeploy**

---

## Production Security Checklist

- [ ] All credentials stored in Render environment variables (not in code)
- [ ] `.env` file is in `.gitignore` and never committed
- [ ] `JWT_SECRET` is a strong random string
- [ ] CORS is restricted to production frontend URL in production
- [ ] Email credentials are app-specific passwords (not account password)
- [ ] MongoDB user has minimal required permissions
- [ ] SSL/TLS enabled (Render provides this by default)

---

**Deployment is complete!** 🚀
