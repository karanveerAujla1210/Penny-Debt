# Google Sheets Setup Complete ✅

## 📊 Your Spreadsheet
**URL**: https://docs.google.com/spreadsheets/d/1mRtDJ8EGWGNj7j_bQ4nNEVdk1W4F83OwfLICCvgACLs/edit?usp=sharing

## 🔧 Apps Script Configuration

### Step 1: Deploy Apps Script
1. Go to https://script.google.com/
2. Create new project
3. Copy code from `crm-frontend/google-apps-script.js`
4. Deploy as web app
5. Set permissions: Anyone can access

### Step 2: Update Script URL
Current script URL in code:
```
https://script.google.com/macros/s/AKfycbwoWxfBaztcXnazEYzJi5XkFwlZBzuWlFQnqT2NBnROClHubO_1fATLgeRa3MJvuilI/exec
```

## 📋 Data Collection Sheets

### Sheet Names (Auto-created):
1. **DebtApplications** - Lead form data
2. **CareerApplications** - Job applications  
3. **ContactForms** - Contact inquiries

### Data Fields:

**DebtApplications:**
- Name, Email, Phone
- Total Debt, Monthly Income
- Loan Type, Employment Status
- City, Pincode, Message
- Submitted At, Email Verified

**CareerApplications:**
- Full Name, Email
- Resume Name, Submitted At

**ContactForms:**
- Full Name, Email, Subject
- Message, Submitted At

## ✅ Test Data Collection

### Test Forms:
1. **Apply Form**: https://penny-debt-crm.vercel.app/apply
2. **Career Form**: https://penny-debt-crm.vercel.app/careers  
3. **Contact Form**: https://penny-debt-crm.vercel.app/contact

### Verification:
- Submit test data through forms
- Check Google Sheets for new rows
- Data appears in real-time

## 🔐 Access Control
- **Owner**: care@pennyanddebt.in
- **Sharing**: Private (only owner can edit)
- **View Access**: Share link as needed

**Status**: 🟢 READY FOR PRODUCTION DATA COLLECTION