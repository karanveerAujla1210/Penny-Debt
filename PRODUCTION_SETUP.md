# Production Setup - Penny Debt CRM

## 🚀 Live System Configuration

### **Frontend Deployment**
- **URL**: https://penny-debt-crm.vercel.app/
- **Platform**: Vercel
- **Status**: ✅ Live and Working

### **Data Storage System**
- **Primary**: Google Sheets Integration
- **Backup**: Local Storage Fallback
- **Real-time**: ✅ Instant data collection

---

## 📊 Google Sheets Configuration

### **Spreadsheet Details**
- **Spreadsheet ID**: `1mRtDJ8EGWGNj7j_bQ4nNEVdk1W4F83OwfLICCvgACLs`
- **Script Deployment ID**: `AKfycbwoWxfBaztcXnazEYzJi5XkFwlZBzuWlFQnqT2NBnROClHubO_1fATLgeRa3MJvuilI`
- **Access URL**: https://script.google.com/macros/s/AKfycbwoWxfBaztcXnazEYzJi5XkFwlZBzuWlFQnqT2NBnROClHubO_1fATLgeRa3MJvuilI/exec

### **Data Collection Sheets**
1. **Debt Applications** - Lead form submissions
2. **Career Applications** - Job applications
3. **Contact Forms** - General inquiries
4. **OTP Verifications** - Email verification logs

---

## 🔐 Login Credentials & Access

### **Google Account (Data Management)**
- **Email**: care@pennyanddebt.in
- **Purpose**: Google Sheets access, Apps Script management
- **Access**: Spreadsheet owner, can view all data

### **Vercel Account (Frontend Hosting)**
- **Platform**: https://vercel.com/dashboard
- **Project**: penny-debt-crm
- **Auto-deploy**: Connected to GitHub main branch

### **GitHub Repository**
- **URL**: https://github.com/karanveerAujla1210/penny-debt-crm
- **Status**: Private (Secure)
- **Access**: Owner only

---

## 📋 Form Configurations

### **Apply Form (Debt Relief)**
```javascript
// Demo OTP for testing
OTP_CODE = "123456"

// Data fields collected:
- Name, Email, Phone
- Total Debt, Monthly Income
- Loan Type, Employment Status
- City, Pincode
- Additional Message
```

### **Career Form**
```javascript
// Data fields collected:
- Full Name, Email
- Resume Upload (local storage)
- Application timestamp
```

### **Contact Form**
```javascript
// Data fields collected:
- Name, Email, Phone
- Subject, Message
- Inquiry timestamp
```

---

## 🛠️ Production Features

### **Security Features**
- ✅ Code protection (F12, right-click disabled)
- ✅ Private GitHub repository
- ✅ Environment variables secured
- ✅ CORS protection enabled

### **Mobile Optimization**
- ✅ Responsive design
- ✅ Touch-friendly forms
- ✅ Mobile-first CSS
- ✅ Optimized font sizes

### **SEO Optimization**
- ✅ Meta tags configured
- ✅ Sitemap.xml created
- ✅ Robots.txt configured
- ✅ Structured data markup

---

## 📈 Data Flow

```
User Form Submission
        ↓
Frontend Validation
        ↓
Google Sheets API
        ↓
Real-time Data Storage
        ↓
Instant Access via Spreadsheet
```

---

## 🔧 Maintenance Access

### **View Collected Data**
1. Open: https://docs.google.com/spreadsheets/d/1mRtDJ8EGWGNj7j_bQ4nNEVdk1W4F83OwfLICCvgACLs
2. Login with: care@pennyanddebt.in
3. View real-time form submissions

### **Update Website**
1. Make changes to code
2. Push to GitHub main branch
3. Vercel auto-deploys in ~2 minutes

### **Monitor Performance**
- **Vercel Analytics**: Built-in performance monitoring
- **Google Sheets**: Real-time data collection status
- **Browser Console**: Error logging and debugging

---

## ✅ Production Checklist

- [x] Frontend deployed and live
- [x] Google Sheets integration working
- [x] All forms collecting data
- [x] Mobile responsive design
- [x] SEO optimization complete
- [x] Security measures implemented
- [x] Code protection active
- [x] Private repository secured
- [x] Real-time data collection
- [x] Email OTP system (demo mode)

**System Status**: 🟢 FULLY OPERATIONAL