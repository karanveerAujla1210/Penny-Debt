const mongoose = require('mongoose');
require('dotenv').config();

// Import all models
const Lead = require('../models/Lead');
const Customer = require('../models/Customer');
const Contact = require('../models/Contact');
const Career = require('../models/Career');
const LoanApplication = require('../models/LoanApplication');
const OTP = require('../models/OTP');
const User = require('../models/User');

// CRM Backend Models
const Employee = require('../crm-backend/models/Employee');

async function initializeDatabase() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/pennydebt');
    console.log('✅ Connected to MongoDB');

    // Create collections with sample data
    console.log('🔄 Initializing collections...');

    // 1. Users Collection
    const sampleUser = await User.findOne({ email: 'admin@pennyanddebt.in' });
    if (!sampleUser) {
      await User.create({
        name: 'Admin User',
        email: 'admin@pennyanddebt.in',
        password: 'admin123',
        role: 'admin',
        phone: '+91 9876543210'
      });
      console.log('✅ Users collection initialized');
    }

    // 2. Employees Collection
    const sampleEmployee = await Employee.findOne({ email: 'manager@pennyanddebt.in' });
    if (!sampleEmployee) {
      await Employee.create({
        name: 'Manager User',
        email: 'manager@pennyanddebt.in',
        password: 'manager123',
        role: 'Manager',
        department: 'Management',
        phone: '+91 9876543211'
      });
      console.log('✅ Employees collection initialized');
    }

    // 3. Leads Collection
    const leadCount = await Lead.countDocuments();
    if (leadCount === 0) {
      await Lead.create({
        name: 'Sample Lead',
        email: 'lead@example.com',
        phone: '+91 9876543212',
        totalDebt: 500000,
        monthlyIncome: 50000,
        loanType: 'Personal Loan',
        employmentStatus: 'Employed',
        city: 'Mumbai',
        pincode: '400001',
        message: 'Need help with debt relief'
      });
      console.log('✅ Leads collection initialized');
    }

    // 4. Customers Collection
    const customerCount = await Customer.countDocuments();
    if (customerCount === 0) {
      await Customer.create({
        fullName: 'Sample Customer',
        email: 'customer@example.com',
        phone: '+91 9876543213',
        totalDebt: 300000,
        monthlyIncome: 40000,
        employmentStatus: 'Employed',
        address: {
          street: '123 Main St',
          city: 'Delhi',
          state: 'Delhi',
          pincode: '110001'
        }
      });
      console.log('✅ Customers collection initialized');
    }

    // 5. Contacts Collection
    const contactCount = await Contact.countDocuments();
    if (contactCount === 0) {
      await Contact.create({
        fullName: 'Sample Contact',
        email: 'contact@example.com',
        phone: '+91 9876543214',
        subject: 'General Inquiry',
        message: 'I need information about your services'
      });
      console.log('✅ Contacts collection initialized');
    }

    // 6. Careers Collection
    const careerCount = await Career.countDocuments();
    if (careerCount === 0) {
      await Career.create({
        fullName: 'Sample Applicant',
        email: 'applicant@example.com',
        phone: '+91 9876543215',
        position: 'Financial Advisor',
        experience: '2-3 years',
        coverLetter: 'I am interested in joining your team'
      });
      console.log('✅ Careers collection initialized');
    }

    // 7. Loan Applications Collection
    const loanCount = await LoanApplication.countDocuments();
    if (loanCount === 0) {
      await LoanApplication.create({
        name: 'Sample Loan Applicant',
        email: 'loan@example.com',
        phone: '+91 9876543216',
        amount: 1000000,
        product: 'Business Loan',
        purpose: 'Business expansion',
        tenure: 36,
        rate: 12.5,
        consent: true
      });
      console.log('✅ Loan Applications collection initialized');
    }

    // Create indexes for better performance
    await createIndexes();

    console.log('🎉 Database initialization completed successfully!');
    console.log('\n📊 Collections created:');
    console.log('- users');
    console.log('- employees');
    console.log('- leads');
    console.log('- customers');
    console.log('- contacts');
    console.log('- careers');
    console.log('- loanapplications');
    console.log('- otps');

  } catch (error) {
    console.error('❌ Database initialization failed:', error);
  } finally {
    await mongoose.disconnect();
    console.log('🔌 Disconnected from MongoDB');
  }
}

async function createIndexes() {
  try {
    // Create indexes for better query performance
    await Lead.createIndexes();
    await Customer.createIndexes();
    await Contact.createIndexes();
    await Career.createIndexes();
    await LoanApplication.createIndexes();
    await OTP.createIndexes();
    await User.createIndexes();
    await Employee.createIndexes();
    
    console.log('✅ Database indexes created');
  } catch (error) {
    console.error('⚠️ Index creation warning:', error.message);
  }
}

// Run initialization
if (require.main === module) {
  initializeDatabase();
}

module.exports = { initializeDatabase };