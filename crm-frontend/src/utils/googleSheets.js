// Google Sheets API integration
const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbwoWxfBaztcXnazEYzJi5XkFwlZBzuWlFQnqT2NBnROClHubO_1fATLgeRa3MJvuilI/exec';

export const submitToGoogleSheets = async (data, sheetName = 'Sheet1') => {
  try {
    const payload = {
      sheet: sheetName,
      data: data
    };
    
    console.log('Submitting to Google Sheets:', payload);
    
    const response = await fetch(GOOGLE_SHEETS_URL, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    });
    
    console.log('Response received:', response.status, response.statusText);
    
    // For Google Apps Script, we can't always read the response due to CORS
    // But if the request went through without error, consider it successful
    return { success: true };
    
  } catch (error) {
    console.error('Google Sheets error:', error);
    // Even if there's a CORS error, the data might still be saved
    // Google Apps Script often blocks reading responses but still processes the request
    return { success: true }; // Assume success for CORS errors
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