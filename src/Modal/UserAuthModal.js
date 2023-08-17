const mongoose = require("mongoose");

const UserAuthShema = new mongoose.Schema({
  Code: { type: String },
  pass: { type: String },
  empName: { type: String },
  userId: { type: String },
  mobile1: { type: String },
  Secmob: { type: String },
  address: { type: String },
  email: { type: String, unique: true, required: true },
  post: { type: String },
  headquarters: { type: String },
  panNo: { type: String },
  adharNo: { type: String },
  bankAccountNo: { type: String },
  ifscCode: { type: String },
  dob: { type: Date },
  joiningDate: { type: Date },
  anniversaryDate: { type: Date },
  resignationDate: { type: Date },
  selectedAreas: [{ type: String }],
  pvrRemark: { type: String },
  online: { type: Boolean },
  Active: { type: Boolean },
  Banned: { type: Boolean },
});

const UserAuthModal = new mongoose.model("UserAvirosa", UserAuthShema);

module.exports = UserAuthModal;
