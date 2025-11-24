// Google Sheets API integration
const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';

export const submitToGoogleSheets = async (data, sheetName = 'Sheet1') => {
  try {
    const response = await fetch(GOOGLE_SHEETS_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        sheet: sheetName,
        data: data
      })
    });
    
    return { success: true };
  } catch (error) {
    console.error('Google Sheets submission error:', error);
    return { success: false, error: error.message };
  }
};

// Alternative method using Google Forms
export const submitToGoogleForm = async (formData, formId) => {
  const formURL = `https://docs.google.com/forms/d/e/${formId}/formResponse`;
  
  const formBody = new URLSearchParams();
  Object.keys(formData).forEach(key => {
    formBody.append(key, formData[key]);
  });

  try {
    await fetch(formURL, {
      method: 'POST',
      mode: 'no-cors',
      body: formBody
    });
    return { success: true };
  } catch (error) {
    console.error('Google Form submission error:', error);
    return { success: false, error: error.message };
  }
};