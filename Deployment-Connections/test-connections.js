require('dotenv').config({ path: '../backend/.env' });
const mongoose = require('mongoose');
const axios = require('axios');

// Test MongoDB Connection
async function testMongoDB() {
  console.log('\n🔍 Testing MongoDB Connection...');
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ MongoDB Connected Successfully');
    console.log(`   Database: ${mongoose.connection.name}`);
    console.log(`   Host: ${mongoose.connection.host}`);
    await mongoose.connection.close();
  } catch (error) {
    console.error('❌ MongoDB Connection Failed:', error.message);
  }
}

// Test Render Backend
async function testRender() {
  console.log('\n🔍 Testing Render Backend...');
  const renderUrl = process.env.RENDER_URL || 'http://localhost:5000';
  try {
    const response = await axios.get(`${renderUrl}/health`);
    console.log('✅ Render Backend Connected');
    console.log(`   Status: ${response.data.status}`);
    console.log(`   MongoDB: ${response.data.mongodb.connected ? 'Connected' : 'Disconnected'}`);
  } catch (error) {
    console.error('❌ Render Backend Failed:', error.message);
  }
}

// Test Vercel Website
async function testVercelWebsite() {
  console.log('\n🔍 Testing Vercel Website...');
  const websiteUrl = process.env.WEBSITE_URL || 'http://localhost:5173';
  try {
    const response = await axios.get(websiteUrl);
    console.log('✅ Vercel Website Connected');
    console.log(`   Status: ${response.status}`);
  } catch (error) {
    console.error('❌ Vercel Website Failed:', error.message);
  }
}

// Test Vercel CRM
async function testVercelCRM() {
  console.log('\n🔍 Testing Vercel CRM...');
  const crmUrl = process.env.CRM_URL || 'http://localhost:3001';
  try {
    const response = await axios.get(crmUrl);
    console.log('✅ Vercel CRM Connected');
    console.log(`   Status: ${response.status}`);
  } catch (error) {
    console.error('❌ Vercel CRM Failed:', error.message);
  }
}

// Run all tests
async function runTests() {
  console.log('═══════════════════════════════════════');
  console.log('   Penny Debt - Connection Tests');
  console.log('═══════════════════════════════════════');
  
  await testMongoDB();
  await testRender();
  await testVercelWebsite();
  await testVercelCRM();
  
  console.log('\n═══════════════════════════════════════');
  console.log('   Tests Complete');
  console.log('═══════════════════════════════════════\n');
  process.exit(0);
}

runTests();
