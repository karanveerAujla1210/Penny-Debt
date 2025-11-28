require('dotenv').config({ path: '../backend/.env' });
const mongoose = require('mongoose');
const axios = require('axios');

// Test MongoDB Connection
async function testMongoDB() {
  console.log('\n🔍 Testing MongoDB Connection...');
  try {
    if (!process.env.MONGODB_URI) {
      console.log('⚠️  MONGODB_URI not set in backend/.env');
      return;
    }
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ MongoDB Connected Successfully');
    console.log(`   Database: ${mongoose.connection.name}`);
    await mongoose.connection.close();
  } catch (error) {
    console.error('❌ MongoDB Connection Failed:', error.message);
  }
}

// Test Local Backend
async function testLocalBackend() {
  console.log('\n🔍 Testing Local Backend...');
  try {
    const response = await axios.get('http://localhost:5000/health', { timeout: 3000 });
    console.log('✅ Local Backend Running');
    console.log(`   Status: ${response.data.status}`);
    console.log(`   MongoDB: ${response.data.mongodb.connected ? 'Connected' : 'Disconnected'}`);
  } catch (error) {
    console.log('⚠️  Local Backend not running (start with: cd backend && npm run dev)');
  }
}

// Test Local Website
async function testLocalWebsite() {
  console.log('\n🔍 Testing Local Website...');
  try {
    await axios.get('http://localhost:5173', { timeout: 3000 });
    console.log('✅ Local Website Running');
  } catch (error) {
    console.log('⚠️  Local Website not running (start with: cd frontend/website && npm run dev)');
  }
}

// Test Local CRM
async function testLocalCRM() {
  console.log('\n🔍 Testing Local CRM...');
  try {
    await axios.get('http://localhost:3001', { timeout: 3000 });
    console.log('✅ Local CRM Running');
  } catch (error) {
    console.log('⚠️  Local CRM not running (start with: cd frontend/crm && npm run dev)');
  }
}

// Run all tests
async function runTests() {
  console.log('═══════════════════════════════════════');
  console.log('   Penny Debt - Local Connection Tests');
  console.log('═══════════════════════════════════════');
  
  await testMongoDB();
  await testLocalBackend();
  await testLocalWebsite();
  await testLocalCRM();
  
  console.log('\n═══════════════════════════════════════');
  console.log('   Tests Complete');
  console.log('═══════════════════════════════════════\n');
  process.exit(0);
}

runTests();
