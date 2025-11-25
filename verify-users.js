const mongoose = require('mongoose');
const User = require('./models/User');

const uri = "mongodb+srv://singh2212karanveer_db_user:tVENTkpkJJIekGBA@cluster0.0xgwopz.mongodb.net/pennydebt?retryWrites=true&w=majority&appName=Cluster0";

async function verifyUsers() {
  try {
    await mongoose.connect(uri);
    console.log('✅ Connected to MongoDB');
    
    const users = await User.find({}).select('name email role phone createdAt');
    
    console.log('\n📊 DATABASE USERS CREATED:');
    console.log('================================');
    
    users.forEach((user, index) => {
      console.log(`${index + 1}. ${user.role.toUpperCase()}`);
      console.log(`   Name: ${user.name}`);
      console.log(`   Email: ${user.email}`);
      console.log(`   Phone: ${user.phone}`);
      console.log(`   Created: ${user.createdAt}`);
      console.log('');
    });
    
    console.log('🔐 LOGIN CREDENTIALS:');
    console.log('=====================');
    console.log('Admin: admin@pennyanddebt.in / PennyAdmin@2024#Secure');
    console.log('Manager: manager@pennyanddebt.in / DebtManager$2024!Strong');
    console.log('Sales1: sales1@pennyanddebt.in / SalesLead#2024@Power');
    console.log('Sales2: sales2@pennyanddebt.in / DebtSales*2024$Pro');
    console.log('Support: support@pennyanddebt.in / Support&2024!Help');
    
    await mongoose.disconnect();
    console.log('\n✅ Verification completed!');
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

verifyUsers();