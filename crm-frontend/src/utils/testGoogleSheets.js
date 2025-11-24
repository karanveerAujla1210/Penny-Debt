// Test Google Sheets connection
const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbwoWxfBaztcXnazEYzJi5XkFwlZBzuWlFQnqT2NBnROClHubO_1fATLgeRa3MJvuilI/exec';

export const testConnection = async () => {
  try {
    console.log('Testing Google Sheets connection...');
    
    const testData = {
      name: 'Test User',
      email: 'test@example.com',
      phone: '1234567890',
      totalDebt: '50000',
      monthlyIncome: '25000',
      loanType: 'personal',
      employmentStatus: 'employed',
      city: 'Mumbai',
      pincode: '400001',
      message: 'Test message',
      submittedAt: new Date().toISOString(),
      emailVerified: true
    };

    const response = await fetch(GOOGLE_SHEETS_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        sheet: 'DebtApplications',
        data: testData
      })
    });

    console.log('Response status:', response.status);
    console.log('Response headers:', response.headers);
    
    const responseText = await response.text();
    console.log('Response text:', responseText);
    
    return { success: response.ok, response: responseText };
  } catch (error) {
    console.error('Test failed:', error);
    return { success: false, error: error.message };
  }
};