# MongoDB Atlas Network Setup - Step by Step

## Quick Setup (5 Minutes)

### Step 1: Login to MongoDB Atlas
```
URL: https://cloud.mongodb.com
Login with your credentials
```

### Step 2: Navigate to Network Access
```
Left Sidebar → Security → Network Access
```

### Step 3: Add Render IP Ranges

**Click "ADD IP ADDRESS" button**

#### First IP Range:
```
IP Address: 74.220.48.0/24
Comment: Render Outbound - Range 1
```
Click "Confirm"

#### Second IP Range:
```
IP Address: 74.220.56.0/24
Comment: Render Outbound - Range 2
```
Click "Confirm"

### Step 4: Verify Database User

```
Left Sidebar → Security → Database Access
```

Ensure user `singh2212karanveer_db_user` has:
- ✅ Read and write to any database
- ✅ Password is correct: `Aujla1210`

### Step 5: Test Connection

After deploying to Render, check logs for:
```
✅ MongoDB connected successfully
❌ MongoNetworkError (if IPs not whitelisted)
```

---

## Alternative: Allow All IPs (Not Recommended for Production)

If you want to allow access from anywhere:
```
IP Address: 0.0.0.0/0
Comment: Allow from anywhere (TEMPORARY)
```

⚠️ **Security Risk**: Only use for testing, remove after confirming Render IPs work.

---

## Troubleshooting

### Connection Timeout
- Verify IP ranges are added correctly
- Check if IPs are in "Active" status (not pending)

### Authentication Failed
- Verify username: `singh2212karanveer_db_user`
- Verify password: `Aujla1210`
- Check user has correct permissions

### Wrong Database
- Connection string uses database: `pennydebt`
- Verify in Atlas: Browse Collections → Database name

---

## Current Configuration

**Connection String:**
```
mongodb+srv://singh2212karanveer_db_user:Aujla1210@cluster0.0xgwopz.mongodb.net/pennydebt?retryWrites=true&w=majority
```

**Render Outbound IPs:**
```
74.220.48.0/24
74.220.56.0/24
```

**Status:** Ready to deploy after adding IPs ✅
