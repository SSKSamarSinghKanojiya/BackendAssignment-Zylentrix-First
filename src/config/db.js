const mongoose = require("mongoose");

const ConnectDB = async (req, res) => {
  try {
    const MONGODB_URI = "mongodb://localhost:27017/zylentrix-task";
    await mongoose.connect(MONGODB_URI);
    console.log("MongoDB Connected Successfully ", MONGODB_URI);
  } catch (error) {
    console.log("MongoDB Connection Error ", error);
    process.exit(1);
  }
};

module.exports = ConnectDB;
