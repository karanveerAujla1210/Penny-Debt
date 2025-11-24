# Google Sheets Integration Setup Guide

## Step 1: Create Google Spreadsheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Penny Debt CRM Data"
4. Copy the spreadsheet ID from the URL (the long string between `/d/` and `/edit`)

## Step 2: Setup Google Apps Script

1. Go to [Google Apps Script](https://script.google.com)
2. Click "New Project"
3. Replace the default code with the code from `google-apps-script.js`
4. Replace `YOUR_SPREADSHEET_ID` with your actual spreadsheet ID
5. Save the project (name it "Penny Debt Data Collector")

## Step 3: Deploy as Web App

1. In Google Apps Script, click "Deploy" > "New Deployment"
2. Choose type: "Web app"
3. Description: "Penny Debt Form Handler"
4. Execute as: "Me"
5. Who has access: "Anyone"
6. Click "Deploy"
7. Copy the Web App URL

## Step 4: Update Frontend Code

1. Open `crm-frontend/src/utils/googleSheets.js`
2. Replace `YOUR_SCRIPT_ID` with the script ID from your Web App URL
3. The URL format is: `https://script.google.com/macros/s/SCRIPT_ID/exec`

## Step 5: Test the Integration

1. Deploy your website
2. Fill out any form (Apply, Careers, Contact)
3. Check your Google Spreadsheet - data should appear automatically

## Data Structure

### DebtApplications Sheet:
- Name, Email, Phone, Total Debt, Monthly Income, Loan Type, Employment Status, City, Pincode, Message, Submitted At, Email Verified

### CareerApplications Sheet:
- Full Name, Email, Resume Name, Submitted At

### ContactForms Sheet:
- Full Name, Email, Subject, Message, Submitted At

## Features

✅ **Real-time data collection** in Google Sheets
✅ **Automatic sheet creation** with proper headers
✅ **Fallback to localStorage** if Google Sheets fails
✅ **No external dependencies** - uses native fetch API
✅ **CORS-friendly** with no-cors mode

## Security Notes

- The web app is public but only accepts POST requests
- No sensitive data is logged in the script
- All form data is validated before submission
- Backup storage in localStorage ensures no data loss

Your forms will now automatically save data to Google Sheets!