# 🔒 Security Cleanup Guide - Penny Debt CRM

## ⚠️ CRITICAL: Execute in Order

### Phase 1: Backup Sensitive Files (DO THIS FIRST!)

```bash
# Create secure backup directory
mkdir -p ~/penny-backups/$(date +%Y-%m-%d)
cd ~/penny-backups/$(date +%Y-%m-%d)

# Backup sensitive files before deletion
cp ~/Desktop/Penny-Debt/.env ./root.env
cp ~/Desktop/Penny-Debt/backend/.env ./backend.env
cp ~/Desktop/Penny-Debt/crm-backend/.env ./crm-backend.env
cp ~/Desktop/Penny-Debt/crm-frontend/.env ./crm-frontend.env
cp ~/Desktop/Penny-Debt/EMPLOYEE_CREDENTIALS.md ./
cp ~/Desktop/Penny-Debt/ADMIN_ACCESS.md ./
cp ~/Desktop/Penny-Debt/crm-backend.zip ./
cp ~/Desktop/Penny-Debt/crm-backend/master_loan.csv.zip ./
cp ~/Desktop/Penny-Debt/crm-backend/master_loan.csv.csv ./
cp ~/Desktop/Penny-Debt/mobileApp/android/app/debug.keystore ./

# Encrypt backup (recommended)
# tar -czf penny-secrets-backup.tar.gz *.env *.md *.zip *.keystore
# gpg -c penny-secrets-backup.tar.gz
# rm penny-secrets-backup.tar.gz
```

### Phase 2: Remove Files from Git Index (Keeps Local Copies)

```bash
cd ~/Desktop/Penny-Debt

# Remove sensitive files from git tracking
git rm --cached .env
git rm --cached backend/.env
git rm --cached crm-backend/.env
git rm --cached crm-frontend/.env
git rm --cached EMPLOYEE_CREDENTIALS.md
git rm --cached ADMIN_ACCESS.md
git rm --cached crm-backend.zip
git rm --cached crm-backend/master_loan.csv.zip
git rm --cached crm-backend/master_loan.csv.csv
git rm --cached mobileApp/android/app/debug.keystore

# Commit the removal
git add .gitignore
git commit -m "security: Remove sensitive files and update .gitignore"
git push origin main
```

### Phase 3: Purge from Git History (IRREVERSIBLE!)

**⚠️ WARNING: This rewrites git history. Coordinate with your team first!**

#### Option A: Using BFG Repo Cleaner (Recommended)

```bash
# Install BFG (if not installed)
# brew install bfg  # macOS
# Or download from: https://rtyley.github.io/bfg-repo-cleaner/

# Clone mirror
cd ~/Desktop
git clone --mirror https://github.com/YOUR-USERNAME/Penny-Debt.git penny-debt-mirror
cd penny-debt-mirror

# Remove sensitive files from ALL history
bfg --delete-files .env
bfg --delete-files EMPLOYEE_CREDENTIALS.md
bfg --delete-files ADMIN_ACCESS.md
bfg --delete-files crm-backend.zip
bfg --delete-files master_loan.csv.zip
bfg --delete-files master_loan.csv.csv
bfg --delete-files debug.keystore

# Clean up
git reflog expire --expire=now --all
git gc --prune=now --aggressive

# Force push (IRREVERSIBLE!)
git push --force
```

#### Option B: Using git filter-repo (Alternative)

```bash
# Install git-filter-repo
# pip install git-filter-repo

cd ~/Desktop/Penny-Debt

# Remove files from history
git filter-repo --path .env --invert-paths
git filter-repo --path backend/.env --invert-paths
git filter-repo --path crm-backend/.env --invert-paths
git filter-repo --path EMPLOYEE_CREDENTIALS.md --invert-paths
git filter-repo --path ADMIN_ACCESS.md --invert-paths
git filter-repo --path crm-backend.zip --invert-paths
git filter-repo --path crm-backend/master_loan.csv.zip --invert-paths
git filter-repo --path mobileApp/android/app/debug.keystore --invert-paths

# Force push
git push origin --force --all
```

### Phase 4: Rotate ALL Secrets (MANDATORY!)

#### 4.1 MongoDB Atlas
1. Go to MongoDB Atlas → Database Access
2. Delete user: `singh2212karanveer_db_user`
3. Create new user with strong password
4. Update connection string in deployment platforms

#### 4.2 JWT Secret
```bash
# Generate new JWT secret
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

#### 4.3 SMTP Credentials
1. Go to Google Account → Security → App Passwords
2. Revoke old app password for `care@pennyanddebt.in`
3. Generate new app password
4. Update in deployment platforms

#### 4.4 Android Keystore
```bash
# Generate new debug keystore
cd ~/Desktop/Penny-Debt/mobileApp/android/app
keytool -genkey -v -keystore debug.keystore -storepass android -alias androiddebugkey -keypass android -keyalg RSA -keysize 2048 -validity 10000

# For production, generate release keystore (NEVER commit this!)
keytool -genkey -v -keystore release.keystore -alias penny-debt-release -keyalg RSA -keysize 2048 -validity 10000
```

### Phase 5: Update Deployment Platforms

#### Railway (Backend)
```bash
# Set new environment variables
railway variables set MONGODB_URI="<NEW_CONNECTION_STRING>"
railway variables set JWT_SECRET="<NEW_JWT_SECRET>"
railway variables set SMTP_PASS="<NEW_APP_PASSWORD>"
```

#### Vercel (Frontend)
```bash
# Update environment variables
vercel env add VITE_API_BASE_URL production
# Enter: https://your-backend.railway.app
```

### Phase 6: Verify Deployments

```bash
# Test backend
curl https://your-backend.railway.app/health

# Test frontend
curl https://your-frontend.vercel.app

# Test authentication
curl -X POST https://your-backend.railway.app/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"test123"}'
```

### Phase 7: Clean Local Files (After Confirming Backups)

```bash
cd ~/Desktop/Penny-Debt

# Remove local copies of sensitive files
rm .env
rm backend/.env
rm crm-backend/.env
rm crm-frontend/.env
rm EMPLOYEE_CREDENTIALS.md
rm ADMIN_ACCESS.md
rm crm-backend.zip
rm crm-backend/master_loan.csv.zip
rm crm-backend/master_loan.csv.csv
rm mobileApp/android/app/debug.keystore

# Verify they're in .gitignore
git status
```

## 📋 Files to Remove (Checklist)

### High Priority (Contains Secrets)
- [x] `/.env` - Root environment file
- [x] `/backend/.env` - Backend MongoDB & JWT secrets
- [x] `/crm-backend/.env` - CRM backend DB credentials
- [x] `/crm-frontend/.env` - Frontend API URLs
- [x] `/EMPLOYEE_CREDENTIALS.md` - Plaintext employee passwords
- [x] `/ADMIN_ACCESS.md` - Admin credentials
- [x] `/crm-backend.zip` - Archived backend with secrets
- [x] `/crm-backend/master_loan.csv.zip` - Customer data
- [x] `/crm-backend/master_loan.csv.csv` - Customer data
- [x] `/mobileApp/android/app/debug.keystore` - Signing key

### Medium Priority (Test Scripts with Hardcoded Values)
- [ ] `/test-mongo.js` - Check for hardcoded credentials
- [ ] `/check-connection.js` - Check for hardcoded credentials
- [ ] `/verify-users.js` - Check for hardcoded credentials
- [ ] `/test-backend.js` - Check for hardcoded credentials
- [ ] `/backend/test-mongo.js` - Check for hardcoded credentials

### Low Priority (Build Artifacts - Can Remove)
- [ ] `/node_modules/` (if committed)
- [ ] `/crm-frontend/dist/` (if committed)
- [ ] `/backend/uploads/*` (user uploaded files)

## 🔐 Post-Cleanup Security Checklist

- [ ] All .env files removed from git
- [ ] Git history purged using BFG or filter-repo
- [ ] MongoDB credentials rotated
- [ ] JWT secret regenerated
- [ ] SMTP password regenerated
- [ ] Android keystore regenerated
- [ ] Railway environment variables updated
- [ ] Vercel environment variables updated
- [ ] Deployments tested and working
- [ ] Team notified of credential rotation
- [ ] Backup stored securely offline
- [ ] Local sensitive files deleted
- [ ] .gitignore updated and committed

## 🚨 If Credentials Were Already Exposed

1. **Assume breach**: Treat all exposed credentials as compromised
2. **Rotate immediately**: Don't wait - rotate all secrets now
3. **Monitor**: Check MongoDB Atlas access logs for unauthorized access
4. **Audit**: Review application logs for suspicious activity
5. **Notify**: If customer data was exposed, follow data breach protocols

## 📞 Support

If you need help with any step:
- MongoDB Atlas: https://www.mongodb.com/docs/atlas/
- Railway: https://docs.railway.app/
- Vercel: https://vercel.com/docs
- BFG Repo Cleaner: https://rtyley.github.io/bfg-repo-cleaner/

---

**Last Updated**: 2025-01-28
**Status**: Ready for execution
