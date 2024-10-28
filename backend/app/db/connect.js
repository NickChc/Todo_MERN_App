const mongoose = require("mongoose");

function connectDB() {
  return mongoose.connect(process.env.DATABASE_URI);
}

module.exports = connectDB;
