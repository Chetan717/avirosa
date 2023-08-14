const mongoose = require("mongoose");

const UserAuthShema = new mongoose.Schema({
  empCode: String,
  empName: String,
  mobile1: String,
  mobile2: String,
  address: String,
  email: String,
  post: String,
  headquarters: String,
  panNo: String,
  adharNo: String,
  bankAccountNo: String,
  ifscCode: String,
  dob: Date,
  joiningDate: Date,
  anniversaryDate: Date,
  resignationDate: Date,
  selectedAreas: [String],
  pvrRemark: String,
  online: false,
  Active: true,
  Banned: false,
});

const UserAuthModal = new mongoose.model("UserAvirosa", UserAuthShema);

module.exports = UserAuthModal;
