#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔍 Verifying environment configurations...\n');

const checks = [
  {
    name: 'Backend .env',
    path: path.join(__dirname, '../backend/.env'),
    required: ['MONGODB_URI', 'JWT_SECRET', 'SMTP_USER', 'SMTP_PASS'],
  },
  {
    name: 'Website .env',
    path: path.join(__dirname, '../frontend/website/.env'),
    required: ['VITE_API_BASE_URL'],
  },
  {
    name: 'CRM .env',
    path: path.join(__dirname, '../frontend/crm/.env'),
    required: ['VITE_API_BASE_URL'],
  },
];

let allPassed = true;

checks.forEach((check) => {
  console.log(`Checking ${check.name}...`);
  
  if (!fs.existsSync(check.path)) {
    console.log(`  ❌ File not found: ${check.path}`);
    allPassed = false;
    return;
  }
  
  const content = fs.readFileSync(check.path, 'utf8');
  const missing = [];
  
  check.required.forEach((key) => {
    if (!content.includes(`${key}=`)) {
      missing.push(key);
    }
  });
  
  if (missing.length > 0) {
    console.log(`  ❌ Missing variables: ${missing.join(', ')}`);
    allPassed = false;
  } else {
    console.log(`  ✅ All required variables present`);
  }
  
  console.log('');
});

if (allPassed) {
  console.log('✅ All environment configurations are valid!');
  process.exit(0);
} else {
  console.log('❌ Some environment configurations are missing or invalid.');
  console.log('Please check the .env.example files for reference.');
  process.exit(1);
}
