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

const doctorSchema = new mongoose.Schema({
  codeNo: {
    type: String,
    required: true,
  },
  drName: {
    type: String,
    required: true,
  },
  email: String,
  degree: String,
  speciality: String,
  mobile: String,
  targetProduct: [targetProductSchema],
  sampleGiven: [sampleGivenSchema],
  area: String,
  dob: Date,
  doa: Date,
});

const Doctor = mongoose.model("Doctor", doctorSchema);

module.exports = Doctor;
