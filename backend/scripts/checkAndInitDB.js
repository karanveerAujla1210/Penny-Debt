#!/usr/bin/env node
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config();

// Import all models
const User = require('../models-website/User');
const Employee = require('../models-website/Employee');
const Customer = require('../models-website/Customer');
const Case = require('../models-website/Case');
const Lead = require('../models-website/Lead');
const Contact = require('../models-website/Contact');
const Payment = require('../models-website/Payment');
const Document = require('../models-website/Document');
const Task = require('../models-website/Task');
const Report = require('../models-website/Report');
const Activity = require('../models-website/Activity');
const Blog = require('../models-website/Blog');
const Career = require('../models-website/Career');
const FAQ = require('../models-website/FAQ');
const Service = require('../models-website/Service');
const Testimonial = require('../models-website/Testimonial');
const OTP = require('../models-website/OTP');

async function checkAndInitDB() {
  try {
    console.log('🔍 Checking MongoDB connection...\n');
    
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB Atlas\n');

    // Get database info
    const db = mongoose.connection.db;
    const collections = await db.listCollections().toArray();
    
    console.log('📊 Current Database Status:');
    console.log(`   Database: ${db.databaseName}`);
    console.log(`   Collections: ${collections.length}\n`);

    if (collections.length > 0) {
      console.log('📁 Existing Collections:');
      for (const col of collections) {
        const count = await db.collection(col.name).countDocuments();
        console.log(`   - ${col.name}: ${count} documents`);
      }
      console.log('');
    } else {
      console.log('⚠️  No collections found. Initializing database...\n');
    }

    // Create indexes for all models
    console.log('🔧 Creating indexes...');
    await Promise.all([
      User.createIndexes(),
      Employee.createIndexes(),
      Customer.createIndexes(),
      Case.createIndexes(),
      Lead.createIndexes(),
      Contact.createIndexes(),
      Payment.createIndexes(),
      Document.createIndexes(),
      Task.createIndexes(),
      Report.createIndexes(),
      Activity.createIndexes(),
      Blog.createIndexes(),
      Career.createIndexes(),
      FAQ.createIndexes(),
      Service.createIndexes(),
      Testimonial.createIndexes(),
      OTP.createIndexes()
    ]);
    console.log('✅ Indexes created\n');

    // Create default admin employee
    const adminExists = await Employee.findOne({ email: 'admin@pennyanddebt.in' });
    if (!adminExists) {
      const hashedPassword = await bcrypt.hash('Admin@2024', 10);
      await Employee.create({
        employeeId: 'EMP001',
        name: 'System Administrator',
        email: 'admin@pennyanddebt.in',
        password: hashedPassword,
        role: 'admin',
        phone: '+91-7814447895',
        department: 'Administration',
        designation: 'System Admin'
      });
      console.log('✅ Admin employee created (admin@pennyanddebt.in / Admin@2024)');
    }

    // Create default manager
    const managerExists = await Employee.findOne({ email: 'manager@pennyanddebt.in' });
    if (!managerExists) {
      const hashedPassword = await bcrypt.hash('Manager@2024', 10);
      await Employee.create({
        employeeId: 'EMP002',
        name: 'Operations Manager',
        email: 'manager@pennyanddebt.in',
        password: hashedPassword,
        role: 'manager',
        phone: '+91-7814447896',
        department: 'Operations',
        designation: 'Manager'
      });
      console.log('✅ Manager created (manager@pennyanddebt.in / Manager@2024)');
    }

    // Create sample FAQ
    const faqCount = await FAQ.countDocuments();
    if (faqCount === 0) {
      await FAQ.create({
        question: 'What is debt relief?',
        answer: 'Debt relief is a process that helps individuals reduce or eliminate their outstanding debts through negotiation and settlement.',
        category: 'general',
        isActive: true
      });
      console.log('✅ Sample FAQ created');
    }

    // Create sample service
    const serviceCount = await Service.countDocuments();
    if (serviceCount === 0) {
      await Service.create({
        title: 'Debt Settlement',
        description: 'Professional debt settlement services to help you become debt-free',
        icon: 'debt-icon',
        isActive: true
      });
      console.log('✅ Sample service created');
    }

    console.log('\n🎉 Database check and initialization completed!\n');
    
    // Final summary
    const finalCollections = await db.listCollections().toArray();
    console.log('📊 Final Database Summary:');
    for (const col of finalCollections) {
      const count = await db.collection(col.name).countDocuments();
      console.log(`   - ${col.name}: ${count} documents`);
    }

    process.exit(0);
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

checkAndInitDB();
