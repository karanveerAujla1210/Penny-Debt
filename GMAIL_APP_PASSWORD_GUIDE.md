# Gmail App Password Setup Guide

## Quick Steps (5 Minutes)

### Step 1: Enable 2-Step Verification
1. Go to: https://myaccount.google.com/security
2. Login with: **care@pennyanddebt.in**
3. Find "2-Step Verification" → Click "Get Started"
4. Follow prompts to enable (if not already enabled)

### Step 2: Generate App Password
1. Go to: https://myaccount.google.com/apppasswords
2. Or: Google Account → Security → 2-Step Verification → App passwords
3. Click "Select app" → Choose "Mail"
4. Click "Select device" → Choose "Other (Custom name)"
5. Enter: **Penny Debt Backend**
6. Click "Generate"

### Step 3: Copy Generated Password
```
Example: abcd efgh ijkl mnop (16 characters with spaces)
```
⚠️ **Save this password - you won't see it again!**

### Step 4: Add to Render Dashboard
1. Go to: https://dashboard.render.com
2. Select: **penny-debt-backend** service
3. Click: **Environment** tab
4. Find: `SMTP_PASS` variable
5. Click "Edit" → Paste app password (remove spaces)
6. Click "Save Changes"
7. Service will auto-redeploy

---

## Troubleshooting

### "2-Step Verification not enabled"
- Must enable 2FA first before creating app passwords
- Use phone number or authenticator app

### "App passwords option not visible"
- Ensure you're logged into correct account (care@pennyanddebt.in)
- Check if account is Google Workspace (may need admin approval)

### Emails not sending after setup
- Verify app password copied correctly (no spaces)
- Check Render logs for SMTP errors
- Ensure SMTP settings are correct:
  - Host: smtp.gmail.com
  - Port: 587
  - User: care@pennyanddebt.in

---

## Current SMTP Configuration

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=care@pennyanddebt.in
SMTP_PASS=(your generated app password)
```

---

## Alternative: Less Secure Apps (Not Recommended)

If app passwords don't work:
1. Go to: https://myaccount.google.com/lesssecureapps
2. Turn ON "Allow less secure apps"
3. Use regular Gmail password

⚠️ **Security Risk**: Only use for testing, not production.

---

## Test Email After Setup

Use Render logs to verify:
```
✅ Email sent successfully
❌ SMTP authentication failed (wrong password)
❌ Connection timeout (firewall/network issue)
```
