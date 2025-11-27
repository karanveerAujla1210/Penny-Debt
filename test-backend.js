const mongoose = require('mongoose');
const Lead = require('./models/Lead');
const Customer = require('./models/Customer');
const Contact = require('./models/Contact');
require('dotenv').config();

async function testBackendConnection() {
  try {
    console.log('🔄 Testing backend MongoDB connection...');
    
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ MongoDB connected');

    // Test creating documents
    console.log('🔄 Testing document creation...');
    
    // Test Lead creation
    const testLead = await Lead.create({
      name: 'Test Lead',
      email: 'test@example.com',
      phone: '+91 9876543210',
      totalDebt: 100000,
      monthlyIncome: 25000,
      loanType: 'Personal Loan',
      employmentStatus: 'Employed',
      city: 'Mumbai',
      pincode: '400001'
    });
    console.log('✅ Lead created:', testLead._id);

    // Test Customer creation
    const testCustomer = await Customer.create({
      fullName: 'Test Customer',
      email: 'customer@example.com',
      phone: '+91 9876543211',
      totalDebt: 200000,
      monthlyIncome: 30000
    });
    console.log('✅ Customer created:', testCustomer._id);

    // Test Contact creation
    const testContact = await Contact.create({
      fullName: 'Test Contact',
      email: 'contact@example.com',
      subject: 'Test Subject',
      message: 'Test message'
    });
    console.log('✅ Contact created:', testContact._id);

    // Test queries
    const leadCount = await Lead.countDocuments();
    const customerCount = await Customer.countDocuments();
    const contactCount = await Contact.countDocuments();
    
    console.log('📊 Collection counts:');
    console.log(`- Leads: ${leadCount}`);
    console.log(`- Customers: ${customerCount}`);
    console.log(`- Contacts: ${contactCount}`);

    console.log('🎉 Backend connection test successful!');
    
  } catch (error) {
    console.error('❌ Backend test failed:', error);
  } finally {
    await mongoose.disconnect();
    console.log('🔌 Disconnected from MongoDB');
  }
}

testBackendConnection();