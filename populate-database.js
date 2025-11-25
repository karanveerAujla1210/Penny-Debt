const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Import models
const User = require('./models/User');
const Customer = require('./models/Customer');
const Lead = require('./models/Lead');
const Contact = require('./models/Contact');
const Career = require('./models/Career');
const OTP = require('./models/OTP');
const Activity = require('./models/Activity');

const uri = "mongodb+srv://singh2212karanveer_db_user:tVENTkpkJJIekGBA@cluster0.0xgwopz.mongodb.net/pennydebt?retryWrites=true&w=majority&appName=Cluster0";

async function populateDatabase() {
  try {
    await mongoose.connect(uri);
    console.log('✅ Connected to MongoDB');

    // Clear existing data
    await User.deleteMany({});
    await Customer.deleteMany({});
    await Lead.deleteMany({});
    await Contact.deleteMany({});
    await Career.deleteMany({});
    await OTP.deleteMany({});
    await Activity.deleteMany({});
    console.log('🗑️ Cleared existing data');

    // Create Users
    const users = [
      {
        name: 'System Administrator',
        email: 'admin@pennyanddebt.in',
        password: await bcrypt.hash('PennyAdmin@2024#Secure', 12),
        role: 'admin',
        phone: '+91-7814447895'
      },
      {
        name: 'Operations Manager',
        email: 'manager@pennyanddebt.in',
        password: await bcrypt.hash('DebtManager$2024!Strong', 12),
        role: 'manager',
        phone: '+91-7814447896'
      },
      {
        name: 'Sales Executive 1',
        email: 'sales1@pennyanddebt.in',
        password: await bcrypt.hash('SalesLead#2024@Power', 12),
        role: 'sales',
        phone: '+91-7814447897'
      },
      {
        name: 'Sales Executive 2',
        email: 'sales2@pennyanddebt.in',
        password: await bcrypt.hash('DebtSales*2024$Pro', 12),
        role: 'sales',
        phone: '+91-7814447898'
      },
      {
        name: 'Customer Support',
        email: 'support@pennyanddebt.in',
        password: await bcrypt.hash('Support&2024!Help', 12),
        role: 'support',
        phone: '+91-7814447899'
      }
    ];

    const createdUsers = await User.insertMany(users);
    console.log('✅ Created 5 users');

    // Create sample customers
    const customers = [
      {
        fullName: 'Rajesh Kumar',
        email: 'rajesh@example.com',
        phone: '+91-9876543210',
        address: {
          street: '123 Main Street',
          city: 'Delhi',
          state: 'Delhi',
          pincode: '110001'
        },
        totalDebt: 500000,
        monthlyIncome: 50000,
        employmentStatus: 'employed',
        assignedAgent: createdUsers[2]._id,
        status: 'new'
      },
      {
        fullName: 'Priya Sharma',
        email: 'priya@example.com',
        phone: '+91-9876543211',
        address: {
          street: '456 Park Avenue',
          city: 'Mumbai',
          state: 'Maharashtra',
          pincode: '400001'
        },
        totalDebt: 750000,
        monthlyIncome: 60000,
        employmentStatus: 'employed',
        assignedAgent: createdUsers[3]._id,
        status: 'in-progress'
      }
    ];

    await Customer.insertMany(customers);
    console.log('✅ Created 2 customers');

    // Create sample leads
    const leads = [
      {
        name: 'Amit Singh',
        email: 'amit@example.com',
        phone: '+91-9876543212',
        totalDebt: 300000,
        monthlyIncome: 40000,
        loanType: 'personal',
        employmentStatus: 'employed',
        city: 'Bangalore',
        pincode: '560001',
        message: 'Need help with debt consolidation',
        status: 'new'
      },
      {
        name: 'Sunita Patel',
        email: 'sunita@example.com',
        phone: '+91-9876543213',
        totalDebt: 450000,
        monthlyIncome: 35000,
        loanType: 'credit-card',
        employmentStatus: 'employed',
        city: 'Pune',
        pincode: '411001',
        message: 'Multiple credit card debts',
        status: 'new'
      }
    ];

    await Lead.insertMany(leads);
    console.log('✅ Created 2 leads');

    // Create sample contacts
    const contacts = [
      {
        fullName: 'Vikram Gupta',
        email: 'vikram@example.com',
        phone: '+91-9876543214',
        subject: 'Debt Relief Inquiry',
        message: 'I need information about your debt relief services',
        status: 'new',
        priority: 'medium'
      },
      {
        fullName: 'Neha Agarwal',
        email: 'neha@example.com',
        phone: '+91-9876543215',
        subject: 'Loan Settlement',
        message: 'Can you help me settle my personal loan?',
        status: 'new',
        priority: 'high'
      }
    ];

    await Contact.insertMany(contacts);
    console.log('✅ Created 2 contacts');

    // Create sample career applications
    const careers = [
      {
        fullName: 'Rohit Verma',
        email: 'rohit@example.com',
        phone: '+91-9876543216',
        position: 'Sales Executive',
        experience: '2 years',
        resumeUrl: '/uploads/rohit-resume.pdf',
        coverLetter: 'I am interested in joining your sales team',
        status: 'applied'
      },
      {
        fullName: 'Kavya Reddy',
        email: 'kavya@example.com',
        phone: '+91-9876543217',
        position: 'Customer Support',
        experience: '1 year',
        resumeUrl: '/uploads/kavya-resume.pdf',
        coverLetter: 'I have experience in customer service',
        status: 'applied'
      }
    ];

    await Career.insertMany(careers);
    console.log('✅ Created 2 career applications');

    // Create sample OTP
    const otps = [
      {
        email: 'test@example.com',
        otp: '123456',
        expiresAt: new Date(Date.now() + 5 * 60 * 1000),
        verified: false,
        attempts: 0
      }
    ];

    await OTP.insertMany(otps);
    console.log('✅ Created 1 OTP record');

    // Create sample activities
    const activities = [
      {
        leadId: new mongoose.Types.ObjectId(),
        leadType: 'lead',
        activityType: 'call',
        subject: 'Initial Contact',
        description: 'Called customer to discuss debt relief options',
        performedBy: createdUsers[2]._id
      },
      {
        leadId: new mongoose.Types.ObjectId(),
        leadType: 'customer',
        activityType: 'email',
        subject: 'Follow-up Email',
        description: 'Sent follow-up email with debt settlement proposal',
        performedBy: createdUsers[3]._id
      }
    ];

    await Activity.insertMany(activities);
    console.log('✅ Created 2 activities');

    // Show final counts
    const counts = {
      users: await User.countDocuments(),
      customers: await Customer.countDocuments(),
      leads: await Lead.countDocuments(),
      contacts: await Contact.countDocuments(),
      careers: await Career.countDocuments(),
      otps: await OTP.countDocuments(),
      activities: await Activity.countDocuments()
    };

    console.log('\n📊 DATABASE POPULATED SUCCESSFULLY!');
    console.log('=====================================');
    console.log(`Users: ${counts.users}`);
    console.log(`Customers: ${counts.customers}`);
    console.log(`Leads: ${counts.leads}`);
    console.log(`Contacts: ${counts.contacts}`);
    console.log(`Careers: ${counts.careers}`);
    console.log(`OTPs: ${counts.otps}`);
    console.log(`Activities: ${counts.activities}`);
    console.log('\n✅ All collections are now visible in MongoDB Atlas!');

    await mongoose.disconnect();
    process.exit(0);

  } catch (error) {
    console.error('❌ Error populating database:', error);
    process.exit(1);
  }
}

populateDatabase();