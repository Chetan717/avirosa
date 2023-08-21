const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  DoctorCode: { type: String },
  DoctorName: { type: String },
  HosName: { type: String },
  mobile: { type: String },
  address: { type: String },
  Area: { type: String },
  Degree: { type: String },
  Speciality: { type: String },
  Dob: { type: Date }, // You can adjust the type based on your date format
  Doa: { type: Date },
  P1: {
    type: String,
  },
  P2: {
    type: String,
  },
  approved: { type: Boolean },
  createdBy: {
    type: String,
  },
  createdAt: {
    type: Date,
  },
});

const Doctor = mongoose.model("Doctor", doctorSchema);

module.exports = Doctor;
