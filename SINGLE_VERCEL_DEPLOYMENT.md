# Single Vercel Project Deployment

## 🎯 Single Project, Multiple Domains

Deploy ONE Vercel project that serves both domains:
- **pennyanddebt.in** → Website
- **crmpennyanddebt.in** → CRM

## 🚀 Deployment Steps

### 1. Deploy to Vercel

1. **Vercel Dashboard** → **Add New** → **Project**
2. **Import**: `karanveerAujla1210/penny-debt-crm`
3. **Configure**:
   ```
   Project Name: penny-debt
   Framework: Vite
   Root Directory: frontend/unified
   Build Command: npm run build
   Output Directory: dist
   Install Command: npm install
   ```

### 2. Set Environment Variables

In Vercel → Settings → Environment Variables:
```
VITE_API_BASE_URL=https://api.pennyanddebt.in/api
VITE_CRM_API_BASE_URL=https://api.pennyanddebt.in/api/crm
VITE_WEBSITE_URL=https://pennyanddebt.in
VITE_CRM_URL=https://crmpennyanddebt.in
```

### 3. Add Both Domains

In Vercel → Settings → Domains:
1. Add `pennyanddebt.in`
2. Add `crmpennyanddebt.in`

Both domains will point to the same deployment!

### 4. How It Works

The app detects the domain at runtime:
```javascript
// In main.jsx
const hostname = window.location.hostname;
const isCRM = hostname.includes('crm');

// Load appropriate app
if (isCRM) {
  // Load CRM app
} else {
  // Load Website app
}
```

## ✅ Benefits

- ✅ Single Vercel project
- ✅ Single deployment
- ✅ Shared dependencies
- ✅ Easier maintenance
- ✅ Both domains work automatically

## 🧪 Testing

### Local Development
```bash
cd frontend/unified
npm install
npm run dev
```

Visit:
- `http://localhost:5173` → Website
- Add `crm` to hosts file to test CRM locally

### Production
- Visit `https://pennyanddebt.in` → Website loads
- Visit `https://crmpennyanddebt.in` → CRM loads
- Click "Employee Login" on website → Redirects to CRM

## 📝 DNS Configuration

Same as before - point both domains to Vercel:

```
pennyanddebt.in
Type: A
Value: 76.76.21.21

crmpennyanddebt.in
Type: A
Value: 76.76.21.21
```

## 🔄 Updates

Push to GitHub → Auto-deploys → Both domains updated!

```bash
git add .
git commit -m "Update frontend"
git push origin main
```

Both `pennyanddebt.in` and `crmpennyanddebt.in` will be updated automatically.
