// Test the login endpoint
const testLogin = async () => {
  try {
    const response = await fetch('https://penny-debt-backend.onrender.com/api/auth/employee-login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: 'admin@pennyanddebt.in',
        password: 'PennyAdmin@2024#Secure'
      })
    });

    const data = await response.json();
    console.log('Login test result:', data);
    
    if (data.success) {
      console.log('✅ Login working correctly!');
      console.log('User data:', data.user);
    } else {
      console.log('❌ Login failed:', data.message);
    }
  } catch (error) {
    console.error('❌ Network error:', error.message);
  }
};

testLogin();