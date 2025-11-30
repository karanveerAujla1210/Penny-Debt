require('dotenv').config();
const mongoose = require('mongoose');

console.log('Testing Backend Configuration...\n');

// Test MongoDB Connection
const testMongoDB = async () => {
  try {
    console.log('1. Testing MongoDB Connection...');
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ MongoDB Connected Successfully');
    console.log(`   Database: ${mongoose.connection.name}`);
    await mongoose.connection.close();
    return true;
  } catch (error) {
    console.log('❌ MongoDB Connection Failed:', error.message);
    return false;
  }
};

// Test Environment Variables
const testEnvVars = () => {
  console.log('\n2. Testing Environment Variables...');
  const required = ['MONGODB_URI', 'JWT_SECRET', 'PORT'];
  let allPresent = true;
  
  required.forEach(key => {
    if (process.env[key]) {
      console.log(`✅ ${key}: SET`);
    } else {
      console.log(`❌ ${key}: MISSING`);
      allPresent = false;
    }
  });
  
  return allPresent;
};

// Run Tests
(async () => {
  const envOk = testEnvVars();
  const dbOk = await testMongoDB();
  
  console.log('\n' + '='.repeat(50));
  if (envOk && dbOk) {
    console.log('✅ Backend Configuration: READY');
    console.log('\nYou can now start the server with: npm run dev');
  } else {
    console.log('❌ Backend Configuration: ISSUES FOUND');
    console.log('\nPlease fix the issues above before starting the server.');
  }
  console.log('='.repeat(50));
  
  process.exit(0);
})();
