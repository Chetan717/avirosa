const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  DoctorCode: { type: String },
  DoctorName: { type: String },
  mobile: { type: String },
  address: { type: String },
  Area: { type: String },
  Degree: { type: String },
  Speciality: { type: String },
  Dob: { type: Date }, // You can adjust the type based on your date format
  Doa: { type: Date },
});

const Doctor = mongoose.model("Doctor", doctorSchema);

module.exports = Doctor;
