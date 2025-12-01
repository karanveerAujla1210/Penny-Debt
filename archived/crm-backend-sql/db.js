const mongoose = require("mongoose");

const uri = "mongodb+srv://singh2212karanveer_db_user:tVENTkpkJJIekGBA@cluster0.0xgwopz.mongodb.net/pennydebt?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(uri)
  .then(() => console.log("MongoDB Connected Successfully!"))
  .catch(err => console.error("MongoDB connection error:", err));
