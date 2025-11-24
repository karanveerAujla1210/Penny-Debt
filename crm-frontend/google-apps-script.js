// Google Apps Script code to deploy as web app
// Copy this code to Google Apps Script (script.google.com)

function doPost(e) {
  try {
    if (!e.postData || !e.postData.contents) {
      throw new Error('No data received');
    }
    
    const data = JSON.parse(e.postData.contents);
    const sheetName = data.sheet || 'FormData';
    const rowData = data.data;
    
    if (!rowData) {
      throw new Error('No row data provided');
    }
    
    const ss = SpreadsheetApp.openById('1mRtDJ8EGWGNj7j_bQ4nNEVdk1W4F83OwfLICCvgACLs');
    let sheet = ss.getSheetByName(sheetName);
    
    if (!sheet) {
      sheet = ss.insertSheet(sheetName);
      
      if (sheetName === 'DebtApplications') {
        sheet.appendRow(['Name', 'Email', 'Phone', 'Total Debt', 'Monthly Income', 'Loan Type', 'Employment Status', 'City', 'Pincode', 'Message', 'Submitted At', 'Email Verified']);
      } else if (sheetName === 'CareerApplications') {
        sheet.appendRow(['Full Name', 'Email', 'Resume Name', 'Submitted At']);
      } else if (sheetName === 'ContactForms') {
        sheet.appendRow(['Full Name', 'Email', 'Subject', 'Message', 'Submitted At']);
      }
    }
    
    let values = [];
    if (sheetName === 'DebtApplications') {
      values = [
        rowData.name || '', rowData.email || '', rowData.phone || '',
        rowData.totalDebt || '', rowData.monthlyIncome || '', rowData.loanType || '',
        rowData.employmentStatus || '', rowData.city || '', rowData.pincode || '',
        rowData.message || '', new Date().toISOString(), rowData.emailVerified || false
      ];
    } else if (sheetName === 'CareerApplications') {
      values = [
        rowData.fullName || '', rowData.email || '', rowData.resumeName || '', new Date().toISOString()
      ];
    } else if (sheetName === 'ContactForms') {
      values = [
        rowData.fullName || '', rowData.email || '', rowData.subject || '', rowData.message || '', new Date().toISOString()
      ];
    }
    
    sheet.appendRow(values);
    
    return ContentService
      .createTextOutput(JSON.stringify({success: true}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({success: false, error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({message: "Penny Debt CRM Data Collector"}))
    .setMimeType(ContentService.MimeType.JSON);
}