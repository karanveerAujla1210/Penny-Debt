# Domain Deployment Setup

## 🌐 Two-Domain Strategy

### **Main Website: pennyanddebt.in**
- **Content**: Home, About, Services, Apply Form, Contact, Careers
- **Deployment**: Vercel Project #1
- **Config**: `vercel-website.json`
- **Routes**: All website pages EXCEPT /crm

### **CRM System: crmpennyanddebt.in**  
- **Content**: CRM Login, Dashboard, Employee Access
- **Deployment**: Vercel Project #2
- **Config**: `vercel-crm.json`
- **Routes**: /crm, /test-login, dashboard routes

## 📋 Deployment Steps

### **Step 1: Deploy Main Website**
1. Create new Vercel project from GitHub
2. Set custom domain: `pennyanddebt.in`
3. Use build settings from `vercel-website.json`
4. Deploy from main branch

### **Step 2: Deploy CRM System**
1. Create second Vercel project from same GitHub repo
2. Set custom domain: `crmpennyanddebt.in`
3. Use build settings from `vercel-crm.json`
4. Deploy from main branch

### **Step 3: DNS Configuration**

**For pennyanddebt.in:**
```
A     @     216.198.79.1
CNAME www   cname.vercel-dns.com
```

**For crmpennyanddebt.in:**
```
A     @     216.198.79.1  
CNAME www   [specific-vercel-cname-for-crm]
```

## 🔗 Access URLs

### **Main Website**
- https://pennyanddebt.in - Homepage
- https://pennyanddebt.in/apply - Apply Form
- https://pennyanddebt.in/contact - Contact
- https://pennyanddebt.in/crm - Redirects to CRM domain

### **CRM System**
- https://crmpennyanddebt.in - CRM Login
- https://crmpennyanddebt.in/crm - CRM Dashboard
- https://crmpennyanddebt.in/test-login - Test Credentials

## 🔐 Employee Access
**CRM URL**: https://crmpennyanddebt.in/crm
- Admin: admin@pennyanddebt.in / PennyAdmin@2024#Secure
- Manager: manager@pennyanddebt.in / DebtManager$2024!Strong
- Sales: sales1@pennyanddebt.in / SalesLead#2024@Power
- Support: support@pennyanddebt.in / Support&2024!Help

**Status**: 🟡 READY FOR DUAL DEPLOYMENT