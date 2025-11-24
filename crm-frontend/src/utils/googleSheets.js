// Google Sheets API integration
const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbxh2YIs80DGDANY1ylXbTDk5ZJfeYngqhVqqos7s-N4Tn3OZehGcwNNlQTz3brbOEHJ/exec';

export const submitToGoogleSheets = async (data, sheetName = 'Sheet1') => {
  try {
    console.log('Submitting to Google Sheets:', { sheet: sheetName, data });
    
    const response = await fetch(GOOGLE_SHEETS_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        sheet: sheetName,
        data: data
      })
    });
    
    console.log('Google Sheets response status:', response.status);
    
    if (response.ok) {
      const result = await response.text();
      console.log('Google Sheets response:', result);
      return { success: true };
    } else {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
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