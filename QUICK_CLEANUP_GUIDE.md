# ⚡ Quick Cleanup Guide - 5 Minutes

## 🎯 Execute These Commands Now

### Step 1: Backup (30 seconds)
```bash
mkdir %USERPROFILE%\penny-backups\emergency
copy .env %USERPROFILE%\penny-backups\emergency\
copy backend\.env %USERPROFILE%\penny-backups\emergency\
copy crm-backend\.env %USERPROFILE%\penny-backups\emergency\
copy EMPLOYEE_CREDENTIALS.md %USERPROFILE%\penny-backups\emergency\
copy ADMIN_ACCESS.md %USERPROFILE%\penny-backups\emergency\
```

### Step 2: Run Cleanup Script (1 minute)
```bash
cleanup-secrets.bat
```

### Step 3: Push Changes (30 seconds)
```bash
git push origin main
```

### Step 4: Rotate Secrets (2 minutes)

**MongoDB** (30 sec):
1. Go to cloud.mongodb.com → Database Access
2. Delete old user, create new user
3. Copy new connection string

**JWT Secret** (30 sec):
```bash
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

**SMTP** (1 min):
1. Go to myaccount.google.com/apppasswords
2. Revoke old, generate new
3. Copy 16-char password

### Step 5: Update Railway (1 minute)
```bash
railway variables set MONGODB_URI="<new_uri>"
railway variables set JWT_SECRET="<new_secret>"
railway variables set SMTP_PASS="<new_password>"
```

## ✅ Done!

Your secrets are now:
- ✅ Removed from git
- ✅ Backed up securely
- ✅ Rotated with new values
- ✅ Updated in production

## 🔥 Still Need to Do

1. Purge git history with BFG (see SECURITY_CLEANUP.md)
2. Delete local .env files after confirming backups
3. Test production deployment
4. Notify team of credential rotation

---

**Total Time**: ~5 minutes
**Difficulty**: Easy
**Impact**: Critical security improvement
