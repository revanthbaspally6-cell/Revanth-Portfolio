const mongoose = require("mongoose");

const certificationSchema = new mongoose.Schema({
  title: String,
  issuer: String,
  date: String,
  category: String,
  description: String
});

module.exports = mongoose.model("Certification", certificationSchema);
