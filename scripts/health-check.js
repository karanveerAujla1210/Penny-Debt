#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔍 PENNY DEBT - HEALTH CHECK');
console.log('============================\n');

const checks = [
  {
    name: 'Backend Package.json',
    path: 'apps/crm-backend/package.json',
    required: true
  },
  {
    name: 'Website Package.json',
    path: 'apps/website/package.json',
    required: true
  },
  {
    name: 'CRM Package.json',
    path: 'apps/crm-frontend/package.json',
    required: true
  },
  {
    name: 'Backend Server',
    path: 'apps/crm-backend/server.js',
    required: true
  },
  {
    name: 'Backend App Config',
    path: 'apps/crm-backend/src/app.js',
    required: true
  },
  {
    name: 'Website Main Entry',
    path: 'apps/website/src/main.jsx',
    required: true
  },
  {
    name: 'CRM Main Entry',
    path: 'apps/crm-frontend/src/main.jsx',
    required: true
  },
  {
    name: 'Website Vite Config',
    path: 'apps/website/vite.config.js',
    required: true
  },
  {
    name: 'CRM Vite Config',
    path: 'apps/crm-frontend/vite.config.js',
    required: true
  },
  {
    name: 'Vercel Config',
    path: 'vercel.json',
    required: true
  }
];

let passed = 0;
let failed = 0;

checks.forEach(check => {
  const fullPath = path.join(process.cwd(), check.path);
  const exists = fs.existsSync(fullPath);
  
  if (exists) {
    console.log(`✅ ${check.name}`);
    passed++;
  } else {
    console.log(`❌ ${check.name} - Missing: ${check.path}`);
    failed++;
  }
});

console.log(`\n📊 RESULTS:`);
console.log(`✅ Passed: ${passed}`);
console.log(`❌ Failed: ${failed}`);

if (failed === 0) {
  console.log(`\n🎉 All health checks passed! Project is ready.`);
  process.exit(0);
} else {
  console.log(`\n⚠️  ${failed} issues found. Please fix before deployment.`);
  process.exit(1);
}