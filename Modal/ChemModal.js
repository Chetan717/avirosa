const mongoose = require("mongoose");

const targetProductSchema = new mongoose.Schema({
  productCode: String,
  productName: String,
  quantity: Number,
});

const sampleGivenSchema = new mongoose.Schema({
  sampleCode: String,
  sampleName: String,
  quantityGiven: Number,
});

const chemistSchema = new mongoose.Schema({
  codeNo: {
    type: String,
    required: true,
  },
  chemName: {
    type: String,
    required: true,
  },
  email: String,
  degree: String,
  speciality: String,
  mobileno1: String,
  mobileno2: String,
  targetProduct: [targetProductSchema],
  sampleGiven: [sampleGivenSchema],
  area: String,
  dob: Date,
  gstNo: String,
  doa: Date,
});

const Chemist = mongoose.model("Chemist", chemistSchema);

module.exports = Chemist;
