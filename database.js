const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://singh2212karanveer_db_user:tVENTkpkJJIekGBA@cluster0.0xgwopz.mongodb.net/pennydebt?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function connectDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB: pennydebt database");
    return client.db("pennydebt");
  } catch (error) {
    console.error("MongoDB Connection Error:", error);
  }
}

module.exports = connectDB;