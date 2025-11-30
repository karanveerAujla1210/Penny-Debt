const fs = require('fs');
const path = require('path');

console.log('🔍 Penny-Debt Project Verification\n');
console.log('=' .repeat(60));

const checks = {
  passed: 0,
  failed: 0,
  warnings: 0
};

function checkFile(filePath, description) {
  const fullPath = path.join(__dirname, filePath);
  if (fs.existsSync(fullPath)) {
    console.log(`✅ ${description}`);
    checks.passed++;
    return true;
  } else {
    console.log(`❌ ${description} - NOT FOUND`);
    checks.failed++;
    return false;
  }
}

function checkEnvVariable(filePath, variable, description) {
  const fullPath = path.join(__dirname, filePath);
  if (fs.existsSync(fullPath)) {
    const content = fs.readFileSync(fullPath, 'utf8');
    if (content.includes(variable)) {
      const line = content.split('\n').find(l => l.startsWith(variable));
      const value = line ? line.split('=')[1] : '';
      if (value && value.trim() && !value.includes('your_') && !value.includes('YOUR_')) {
        console.log(`✅ ${description}: SET`);
        checks.passed++;
        return true;
      } else {
        console.log(`⚠️  ${description}: EMPTY OR PLACEHOLDER`);
        checks.warnings++;
        return false;
      }
    }
  }
  console.log(`❌ ${description}: NOT FOUND`);
  checks.failed++;
  return false;
}

console.log('\n📁 BACKEND FILES');
console.log('-'.repeat(60));
checkFile('backend/package.json', 'Backend package.json');
checkFile('backend/server.js', 'Backend server.js');
checkFile('backend/src/app.js', 'Backend app.js');
checkFile('backend/src/config/db.js', 'Database configuration');
checkFile('backend/.env', 'Backend environment file');

console.log('\n📁 BACKEND ROUTES');
console.log('-'.repeat(60));
checkFile('backend/src/routes/website/leads.js', 'Website leads route');
checkFile('backend/src/routes/website/contacts.js', 'Website contacts route');
checkFile('backend/src/routes/crm/auth.js', 'CRM auth route');
checkFile('backend/src/routes/crm/dashboard.js', 'CRM dashboard route');
checkFile('backend/src/routes/mobile/auth.js', 'Mobile auth route');

console.log('\n📁 BACKEND MODELS');
console.log('-'.repeat(60));
checkFile('backend/models-website/Lead.js', 'Lead model');
checkFile('backend/models-website/Activity.js', 'Activity model');
checkFile('backend/models-website/Customer.js', 'Customer model');
checkFile('backend/models-website/Contact.js', 'Contact model');

console.log('\n📁 WEBSITE FRONTEND');
console.log('-'.repeat(60));
checkFile('frontend/website/package.json', 'Website package.json');
checkFile('frontend/website/src/App.jsx', 'Website App.jsx');
checkFile('frontend/website/src/services/api.js', 'Website API service');
checkFile('frontend/website/.env', 'Website environment file');
checkFile('frontend/website/vite.config.js', 'Website Vite config');

console.log('\n📁 CRM FRONTEND');
console.log('-'.repeat(60));
checkFile('frontend/crm/package.json', 'CRM package.json');
checkFile('frontend/crm/src/App.jsx', 'CRM App.jsx');
checkFile('frontend/crm/src/services/api.js', 'CRM API service');
checkFile('frontend/crm/.env', 'CRM environment file');
checkFile('frontend/crm/vite.config.js', 'CRM Vite config');

console.log('\n🔐 ENVIRONMENT VARIABLES');
console.log('-'.repeat(60));
checkEnvVariable('backend/.env', 'MONGODB_URI', 'MongoDB URI');
checkEnvVariable('backend/.env', 'JWT_SECRET', 'JWT Secret');
checkEnvVariable('backend/.env', 'SMTP_USER', 'SMTP User');
checkEnvVariable('backend/.env', 'PORT', 'Backend Port');
checkEnvVariable('frontend/website/.env', 'VITE_API_BASE_URL', 'Website API URL');
checkEnvVariable('frontend/crm/.env', 'VITE_API_BASE_URL', 'CRM API URL');

console.log('\n📦 DEPLOYMENT FILES');
console.log('-'.repeat(60));
checkFile('backend/render.yaml', 'Render deployment config');
checkFile('frontend/website/vercel.json', 'Website Vercel config');
checkFile('frontend/crm/vercel.json', 'CRM Vercel config');

console.log('\n📚 DOCUMENTATION');
console.log('-'.repeat(60));
checkFile('README.md', 'Main README');
checkFile('PROJECT_STATUS_AND_FIXES.md', 'Project status document');
checkFile('QUICK_FIX_GUIDE.md', 'Quick fix guide');

console.log('\n' + '='.repeat(60));
console.log('📊 VERIFICATION SUMMARY');
console.log('='.repeat(60));
console.log(`✅ Passed: ${checks.passed}`);
console.log(`⚠️  Warnings: ${checks.warnings}`);
console.log(`❌ Failed: ${checks.failed}`);

const total = checks.passed + checks.warnings + checks.failed;
const score = ((checks.passed / total) * 100).toFixed(1);

console.log(`\n📈 Score: ${score}%`);

if (checks.failed === 0 && checks.warnings === 0) {
  console.log('\n🎉 Perfect! All checks passed!');
} else if (checks.failed === 0) {
  console.log('\n✅ Good! Only minor warnings.');
  console.log('⚠️  Check warnings above and configure missing values.');
} else {
  console.log('\n⚠️  Some checks failed. Please review the issues above.');
}

console.log('\n💡 Next Steps:');
console.log('   1. Fix any failed checks');
console.log('   2. Configure environment variables with warnings');
console.log('   3. Run: npm install in backend, frontend/website, frontend/crm');
console.log('   4. Start servers using start-all.bat or manually');
console.log('   5. Test: http://localhost:5000/health');
console.log('\n');
