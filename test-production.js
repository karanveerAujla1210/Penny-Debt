#!/usr/bin/env node
/**
 * Production Testing Script
 * Tests all critical endpoints for login, signup, and auth flows
 */

const BASE_URL = process.env.API_BASE_URL || 'http://localhost:5000';

const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m'
};

const log = (message, color = 'reset') => {
  console.log(`${colors[color]}${message}${colors.reset}`);
};

const testCase = (name) => {
  log(`\n${'='.repeat(60)}`, 'cyan');
  log(`TEST: ${name}`, 'blue');
  log(`${'='.repeat(60)}`, 'cyan');
};

const success = (message) => log(`✓ ${message}`, 'green');
const error = (message) => log(`✗ ${message}`, 'red');
const info = (message) => log(`ℹ ${message}`, 'yellow');

async function testHealthCheck() {
  testCase('Health Check');
  try {
    const response = await fetch(`${BASE_URL}/health`);
    const data = await response.json();
    
    if (response.ok) {
      success(`Backend is running: ${JSON.stringify(data)}`);
      return true;
    } else {
      error(`Health check failed: ${JSON.stringify(data)}`);
      return false;
    }
  } catch (err) {
    error(`Cannot reach backend at ${BASE_URL}: ${err.message}`);
    return false;
  }
}

async function testEmployeeLogin() {
  testCase('Employee Login');
  
  const testCredentials = [
    { email: 'admin@pennyanddebt.in', password: 'PennyAdmin@2024#Secure', role: 'admin' },
    { email: 'manager@pennyanddebt.in', password: 'DebtManager$2024!Strong', role: 'manager' }
  ];

  for (const cred of testCredentials) {
    try {
      info(`Testing: ${cred.email}`);
      const response = await fetch(`${BASE_URL}/api/auth/employee-login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: cred.email, password: cred.password })
      });

      const data = await response.json();

      if (response.ok && data.success) {
        success(`Login successful for ${cred.email} (role: ${data.user.role})`);
      } else {
        error(`Login failed for ${cred.email}: ${data.message}`);
      }
    } catch (err) {
      error(`Request failed for ${cred.email}: ${err.message}`);
    }
  }
}

async function testCustomerSignup() {
  testCase('Customer Signup');

  const testData = {
    full_name: `Test Customer ${Date.now()}`,
    email: `test_${Date.now()}@example.com`,
    password: 'TestPassword123!',
    mobile: '9876543210'
  };

  try {
    info(`Signing up: ${testData.email}`);
    const response = await fetch(`${BASE_URL}/api/customers/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(testData)
    });

    const data = await response.json();

    if (response.ok) {
      success(`Signup successful: ${data.message}`);
      success(`Customer ID: ${data.customerId}`);
      return { ...testData, customerId: data.customerId };
    } else {
      error(`Signup failed: ${data.message}`);
      return null;
    }
  } catch (err) {
    error(`Request failed: ${err.message}`);
    return null;
  }
}

async function testCustomerLogin(customer) {
  testCase('Customer Login');

  if (!customer) {
    info('Skipping - no customer created from signup test');
    return;
  }

  try {
    info(`Logging in: ${customer.email}`);
    const response = await fetch(`${BASE_URL}/api/customers/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: customer.email,
        password: customer.password
      })
    });

    const data = await response.json();

    if (response.ok) {
      success(`Login successful: ${data.message}`);
      success(`User: ${data.user.name} (${data.user.email})`);
      success(`Token: ${data.token}`);
    } else {
      error(`Login failed: ${data.message}`);
    }
  } catch (err) {
    error(`Request failed: ${err.message}`);
  }
}

async function testOTPEndpoint() {
  testCase('OTP Endpoint');

  const testEmail = `otp_test_${Date.now()}@example.com`;
  
  try {
    info(`Sending OTP to: ${testEmail}`);
    const response = await fetch(`${BASE_URL}/api/otp/send-otp`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: testEmail,
        name: 'Test User'
      })
    });

    const data = await response.json();

    if (response.ok) {
      success(`OTP sent successfully: ${data.message}`);
    } else {
      error(`OTP send failed: ${data.message}`);
    }
  } catch (err) {
    error(`Request failed: ${err.message}`);
  }
}

async function testCORSHeaders() {
  testCase('CORS Headers Verification');

  const origins = [
    'https://pennyanddebt.in',
    'https://crmpennyanddebt.in',
    'http://localhost:5173'
  ];

  for (const origin of origins) {
    try {
      info(`Testing CORS for origin: ${origin}`);
      const response = await fetch(`${BASE_URL}/api/auth/employee-login`, {
        method: 'OPTIONS',
        headers: {
          'Origin': origin,
          'Access-Control-Request-Method': 'POST'
        }
      });

      const corsHeader = response.headers.get('access-control-allow-origin');
      if (corsHeader) {
        success(`CORS allowed for: ${origin} (${corsHeader})`);
      } else {
        info(`No CORS header for: ${origin} (might be OK for same-origin requests)`);
      }
    } catch (err) {
      error(`CORS test failed for ${origin}: ${err.message}`);
    }
  }
}

async function runAllTests() {
  log(`\n${'#'.repeat(60)}`, 'cyan');
  log(`# Production Testing Suite`, 'blue');
  log(`# Backend URL: ${BASE_URL}`, 'blue');
  log(`${'#'.repeat(60)}\n`, 'cyan');

  // Run tests in sequence
  const healthOk = await testHealthCheck();
  
  if (!healthOk) {
    error('\n❌ Backend is not running. Please start it and try again.');
    process.exit(1);
  }

  await testEmployeeLogin();
  const customer = await testCustomerSignup();
  await testCustomerLogin(customer);
  await testOTPEndpoint();
  await testCORSHeaders();

  log(`\n${'#'.repeat(60)}`, 'cyan');
  log(`# Testing Complete`, 'green');
  log(`${'#'.repeat(60)}\n`, 'cyan');
}

// Run tests
runAllTests().catch(err => {
  error(`Test suite failed: ${err.message}`);
  process.exit(1);
});
