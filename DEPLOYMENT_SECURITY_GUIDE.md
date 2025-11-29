# Deployment Security Guide

## 1. MongoDB Atlas Network Configuration

### Add Render IP Addresses to Whitelist

1. **Login to MongoDB Atlas**: https://cloud.mongodb.com
2. **Navigate to**: Network Access (Security → Network Access)
3. **Add IP Addresses**:

```
Click "ADD IP ADDRESS" button

Entry 1:
- IP Address: 74.220.48.0/24
- Comment: Render Outbound IPs - Range 1

Entry 2:
- IP Address: 74.220.56.0/24
- Comment: Render Outbound IPs - Range 2
```

4. **Click "Confirm"**

### Verify Connection String
Your current connection string in `render.yaml`:
```
mongodb+srv://singh2212karanveer_db_user:Aujla1210@cluster0.0xgwopz.mongodb.net/pennydebt?retryWrites=true&w=majority
```

✅ Ensure database user has read/write permissions

---

## 2. Gmail SMTP Configuration

### Enable App Password for care@pennyanddebt.in

1. **Google Account Settings**: https://myaccount.google.com
2. **Security → 2-Step Verification** (must be enabled)
3. **App Passwords**:
   - Select app: Mail
   - Select device: Other (Custom name) → "Penny Debt Backend"
   - Generate password
4. **Add to Render Dashboard**:
   - Go to Render service → Environment
   - Set `SMTP_PASS` = generated app password

### Whitelist Render IPs (if needed)
If emails fail, contact Google Workspace admin to whitelist:
- `74.220.48.0/24`
- `74.220.56.0/24`

---

## 3. Render Deployment Checklist

### Environment Variables (Set in Render Dashboard)

| Variable | Value | Notes |
|----------|-------|-------|
| `NODE_ENV` | production | Auto-set |
| `PORT` | 5000 | Auto-detected |
| `MONGODB_URI` | (connection string) | From Atlas |
| `JWT_SECRET` | (strong secret) | Change default |
| `SESSION_SECRET` | (strong secret) | Change default |
| `SMTP_PASS` | (app password) | From Gmail |
| `ALLOWED_ORIGINS` | (frontend URLs) | Comma-separated |

### Security Recommendations

**Change Default Secrets**:
```bash
# Generate strong secrets
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

Replace in Render dashboard:
- `JWT_SECRET`
- `SESSION_SECRET`

---

## 4. Vercel Frontend Configuration

### Website (.env.production)
```env
VITE_API_BASE_URL=https://penny-debt-backend.onrender.com/api
```

### CRM (.env.production)
```env
VITE_API_BASE_URL=https://penny-debt-backend.onrender.com/api/crm
```

### Vercel Environment Variables
Set in Vercel dashboard for each project:
- Environment: Production
- Add `VITE_API_BASE_URL`

---

## 5. CORS Configuration

### Backend (already configured in render.yaml)
```
ALLOWED_ORIGINS=https://penny-debt-crm.vercel.app,https://pennyanddebt.in
```

### Verify in backend/server.js
```javascript
const allowedOrigins = process.env.ALLOWED_ORIGINS.split(',');
```

---

## 6. Rate Limiting (DDoS Protection)

### Configured in render.yaml
```
RATE_LIMIT_WINDOW_MS=900000    # 15 minutes
RATE_LIMIT_MAX_REQUESTS=100    # 100 requests per window
```

### Implement in backend/server.js
```javascript
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: process.env.RATE_LIMIT_WINDOW_MS || 900000,
  max: process.env.RATE_LIMIT_MAX_REQUESTS || 100
});

app.use('/api/', limiter);
```

---

## 7. Third-Party Service IP Whitelisting

### Payment Gateway Integration (Future)
When integrating Razorpay/Stripe/PayU, whitelist Render IPs:
- `74.220.48.0/24`
- `74.220.56.0/24`

### SMS Gateway (Future)
For Twilio/MSG91, add IPs to allowed list in service dashboard.

---

## 8. SSL/TLS Configuration

✅ **Render provides automatic HTTPS**
✅ **Vercel provides automatic HTTPS**

### Force HTTPS in Backend
```javascript
if (process.env.NODE_ENV === 'production') {
  app.use((req, res, next) => {
    if (req.header('x-forwarded-proto') !== 'https') {
      res.redirect(`https://${req.header('host')}${req.url}`);
    } else {
      next();
    }
  });
}
```

---

## 9. Monitoring & Logging

### Render Logs
- View in Render Dashboard → Logs
- Monitor for connection errors

### MongoDB Atlas Monitoring
- Database → Metrics
- Check connection count and query performance

---

## 10. Backup Strategy

### MongoDB Atlas Backups
1. **Navigate to**: Clusters → Backup
2. **Enable**: Cloud Backup (if not enabled)
3. **Schedule**: Daily snapshots recommended

### Environment Variables Backup
Keep secure copy of all production environment variables in password manager.

---

## Quick Deployment Steps

1. ✅ Add Render IPs to MongoDB Atlas
2. ✅ Generate Gmail App Password
3. ✅ Update secrets in Render dashboard
4. ✅ Deploy backend to Render
5. ✅ Update frontend .env.production files
6. ✅ Deploy website to Vercel
7. ✅ Deploy CRM to Vercel
8. ✅ Test all endpoints
9. ✅ Monitor logs for errors

---

## Support Contacts

- **MongoDB Atlas**: https://support.mongodb.com
- **Render**: https://render.com/docs
- **Vercel**: https://vercel.com/support
- **Google Workspace**: https://support.google.com
