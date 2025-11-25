const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config();

// Import all models
const User = require('../models/User');
const Customer = require('../models/Customer');
const Lead = require('../models/Lead');
const Contact = require('../models/Contact');
const Career = require('../models/Career');
const OTP = require('../models/OTP');
const Activity = require('../models/Activity');

const initDatabase = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('✅ Connected to MongoDB');

    // Create indexes
    await User.createIndexes();
    await Customer.createIndexes();
    await Lead.createIndexes();
    await Contact.createIndexes();
    await Career.createIndexes();
    await OTP.createIndexes();
    await Activity.createIndexes();
    console.log('✅ Database indexes created');

    // Create default admin user
    const adminExists = await User.findOne({ email: 'admin@pennyanddebt.in' });
    if (!adminExists) {
      const hashedPassword = await bcrypt.hash('PennyAdmin@2024#Secure', 12);
      await User.create({
        name: 'System Administrator',
        email: 'admin@pennyanddebt.in',
        password: hashedPassword,
        role: 'admin',
        phone: '+91-7814447895'
      });
      console.log('✅ Admin user created');
    }

    // Create default manager user
    const managerExists = await User.findOne({ email: 'manager@pennyanddebt.in' });
    if (!managerExists) {
      const hashedPassword = await bcrypt.hash('DebtManager$2024!Strong', 12);
      await User.create({
        name: 'Operations Manager',
        email: 'manager@pennyanddebt.in',
        password: hashedPassword,
        role: 'manager',
        phone: '+91-7814447896'
      });
      console.log('✅ Manager user created');
    }

    // Create default sales users
    const sales1Exists = await User.findOne({ email: 'sales1@pennyanddebt.in' });
    if (!sales1Exists) {
      const hashedPassword = await bcrypt.hash('SalesLead#2024@Power', 12);
      await User.create({
        name: 'Sales Executive 1',
        email: 'sales1@pennyanddebt.in',
        password: hashedPassword,
        role: 'sales',
        phone: '+91-7814447897'
      });
      console.log('✅ Sales1 user created');
    }

    const sales2Exists = await User.findOne({ email: 'sales2@pennyanddebt.in' });
    if (!sales2Exists) {
      const hashedPassword = await bcrypt.hash('DebtSales*2024$Pro', 12);
      await User.create({
        name: 'Sales Executive 2',
        email: 'sales2@pennyanddebt.in',
        password: hashedPassword,
        role: 'sales',
        phone: '+91-7814447898'
      });
      console.log('✅ Sales2 user created');
    }

    // Create default support user
    const supportExists = await User.findOne({ email: 'support@pennyanddebt.in' });
    if (!supportExists) {
      const hashedPassword = await bcrypt.hash('Support&2024!Help', 12);
      await User.create({
        name: 'Customer Support',
        email: 'support@pennyanddebt.in',
        password: hashedPassword,
        role: 'support',
        phone: '+91-7814447899'
      });
      console.log('✅ Support user created');
    }

    console.log('🎉 Database initialization completed successfully!');
    console.log('📊 Collections created:');
    console.log('   - users (with default employees)');
    console.log('   - customers');
    console.log('   - leads');
    console.log('   - contacts');
    console.log('   - careers');
    console.log('   - otps');
    console.log('   - activities');

    process.exit(0);
  } catch (error) {
    console.error('❌ Database initialization failed:', error);
    process.exit(1);
  }
};

// Run initialization
initDatabase();