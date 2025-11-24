// Google Apps Script code to deploy as web app
// Copy this code to Google Apps Script (script.google.com)

function doPost(e) {
  try {
    // Log the incoming request for debugging
    console.log('Received POST request:', e.postData.contents);
    
    const data = JSON.parse(e.postData.contents);
    const sheetName = data.sheet || 'Sheet1';
    const rowData = data.data;
    
    console.log('Parsed data:', data);
    console.log('Sheet name:', sheetName);
    console.log('Row data:', rowData);
    
    // Open the spreadsheet
    const ss = SpreadsheetApp.openById('1mRtDJ8EGWGNj7j_bQ4nNEVdk1W4F83OwfLICCvgACLs');
    let sheet = ss.getSheetByName(sheetName);
    
    // Create sheet if it doesn't exist
    if (!sheet) {
      sheet = ss.insertSheet(sheetName);
      
      // Add headers based on data type
      if (sheetName === 'DebtApplications') {
        sheet.getRange(1, 1, 1, 12).setValues([[
          'Name', 'Email', 'Phone', 'Total Debt', 'Monthly Income', 
          'Loan Type', 'Employment Status', 'City', 'Pincode', 
          'Message', 'Submitted At', 'Email Verified'
        ]]);
      } else if (sheetName === 'CareerApplications') {
        sheet.getRange(1, 1, 1, 4).setValues([[
          'Full Name', 'Email', 'Resume Name', 'Submitted At'
        ]]);
      } else if (sheetName === 'ContactForms') {
        sheet.getRange(1, 1, 1, 4).setValues([[
          'Full Name', 'Email', 'Subject', 'Message', 'Submitted At'
        ]]);
      }
    }
    
    // Convert object to array based on sheet type
    let values = [];
    if (sheetName === 'DebtApplications') {
      values = [
        rowData.name || '',
        rowData.email || '',
        rowData.phone || '',
        rowData.totalDebt || '',
        rowData.monthlyIncome || '',
        rowData.loanType || '',
        rowData.employmentStatus || '',
        rowData.city || '',
        rowData.pincode || '',
        rowData.message || '',
        rowData.submittedAt || new Date().toISOString(),
        rowData.emailVerified || false
      ];
    } else if (sheetName === 'CareerApplications') {
      values = [
        rowData.fullName || '',
        rowData.email || '',
        rowData.resumeName || '',
        rowData.submittedAt || new Date().toISOString()
      ];
    } else if (sheetName === 'ContactForms') {
      values = [
        rowData.fullName || '',
        rowData.email || '',
        rowData.subject || '',
        rowData.message || '',
        rowData.submittedAt || new Date().toISOString()
      ];
    }
    
    // Add the data to the sheet
    sheet.appendRow(values);
    console.log('Data added to sheet successfully');
    
    return ContentService
      .createTextOutput(JSON.stringify({success: true, message: 'Data saved successfully'}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.error('Error in doPost:', error);
    return ContentService
      .createTextOutput(JSON.stringify({success: false, error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeaders({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'Content-Type'
      });
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({message: "Penny Debt CRM Data Collector", status: "active"}))
    .setMimeType(ContentService.MimeType.JSON)
    .setHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST',
      'Access-Control-Allow-Headers': 'Content-Type'
    });
}

function doOptions(e) {
  return ContentService
    .createTextOutput('')
    .setHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    });
}