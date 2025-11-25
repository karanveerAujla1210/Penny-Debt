const mongoose = require('mongoose');

const uri = "mongodb+srv://singh2212karanveer_db_user:tVENTkpkJJIekGBA@cluster0.0xgwopz.mongodb.net/pennydebt?retryWrites=true&w=majority&appName=Cluster0";

async function checkConnection() {
  try {
    console.log('🔄 Connecting to MongoDB...');
    
    await mongoose.connect(uri);
    console.log('✅ MongoDB Connected Successfully!');
    
    // Test database operations
    const collections = await mongoose.connection.db.listCollections().toArray();
    console.log('📊 Available Collections:', collections.map(c => c.name));
    
    // Check connection state
    console.log('🔗 Connection State:', mongoose.connection.readyState);
    console.log('🗄️ Database Name:', mongoose.connection.db.databaseName);
    
    await mongoose.disconnect();
    console.log('✅ Connection test completed successfully!');
    
  } catch (error) {
    console.error('❌ MongoDB Connection Error:', error.message);
  }
}

checkConnection();