const mongoose = require('mongoose');

const uri = "mongodb+srv://singh2212karanveer_db_user:Aujla1210@cluster0.0xgwopz.mongodb.net/pennydebt?retryWrites=true&w=majority";

async function testConnection() {
  try {
    console.log('Testing with correct password...');
    await mongoose.connect(uri);
    console.log('✅ Connected successfully');
    
    const collections = await mongoose.connection.db.listCollections().toArray();
    console.log('Collections:', collections.map(c => c.name));
    
    await mongoose.disconnect();
  } catch (error) {
    console.error('❌ Connection failed:', error.message);
  }
}

testConnection();