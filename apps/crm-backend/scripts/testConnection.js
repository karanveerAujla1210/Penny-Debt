require('dotenv').config();
const mongoose = require('mongoose');

// Import all models
const User = require('../models/User');
const Role = require('../models/Role');
const Customer = require('../models/Customer');
const Lead = require('../models/Lead');
const Case = require('../models/Case');
const Loan = require('../models/Loan');
const Program = require('../models/Program');
const Settlement = require('../models/Settlement');
const Payment = require('../models/Payment');
const Mandate = require('../models/Mandate');
const HarassmentCase = require('../models/HarassmentCase');
const LegalCase = require('../models/LegalCase');
const Ticket = require('../models/Ticket');
const Document = require('../models/Document');
const AuditLog = require('../models/AuditLog');

const testConnection = async () => {
  try {
    console.log('🔄 Connecting to MongoDB...');
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ MongoDB connected successfully!\n');

    console.log('📊 Database:', mongoose.connection.db.databaseName);
    console.log('🌐 Host:', mongoose.connection.host);
    console.log('📡 Port:', mongoose.connection.port);
    console.log('');

    console.log('📦 Checking Models...\n');

    const models = [
      { name: 'User', model: User },
      { name: 'Role', model: Role },
      { name: 'Customer', model: Customer },
      { name: 'Lead', model: Lead },
      { name: 'Case', model: Case },
      { name: 'Loan', model: Loan },
      { name: 'Program', model: Program },
      { name: 'Settlement', model: Settlement },
      { name: 'Payment', model: Payment },
      { name: 'Mandate', model: Mandate },
      { name: 'HarassmentCase', model: HarassmentCase },
      { name: 'LegalCase', model: LegalCase },
      { name: 'Ticket', model: Ticket },
      { name: 'Document', model: Document },
      { name: 'AuditLog', model: AuditLog }
    ];

    for (const { name, model } of models) {
      const count = await model.countDocuments();
      console.log(`✓ ${name.padEnd(20)} - ${count} documents`);
    }

    console.log('\n✅ All models loaded successfully!');
    console.log('\n🎉 Database connection test passed!');
    
    process.exit(0);
  } catch (error) {
    console.error('\n❌ Connection test failed:', error.message);
    process.exit(1);
  }
};

testConnection();
