const mongoose = require("mongoose");


const currentTime = new Date();

// Get the current hours, minutes, and seconds
const currentHours = currentTime.getHours();
const currentMinutes = currentTime.getMinutes();
const currentSeconds = currentTime.getSeconds();

// Determine whether it's AM or PM
const period = currentHours >= 12 ? 'PM' : 'AM';

// Convert to 12-hour format
const twelveHourFormatHours = currentHours % 12 || 12;

// Format the time as hh:MM:SS AM/PM
const formattedCurrentTime = `${twelveHourFormatHours.toString().padStart(2, '0')}:${currentMinutes.toString().padStart(2, '0')}:${currentSeconds.toString().padStart(2, '0')} ${period}`;


const PobDocScheme = new mongoose.Schema({
  id: {
    type: Number,
  },
  Product: {
    type: String,
  },
  Qnt: {
    type: Number,
  },
  value: {
    type: Number,
  },
});

const DcrdoctorSchema = new mongoose.Schema({
  workWith: { type: String },
  DoctorCode: { type: String },
  DoctorName: { type: String },
  HosName: { type: String },
  mobile: { type: String },
  address: { type: String },
  Area: { type: String },
  Degree: { type: String },
  Speciality: { type: String },
  DcrId: {
    type: String,
  },
  P1: {
    type: String,
  },
  P2: {
    type: String,
  },
  Detail: {
    type: String,
  },
  lit: {
    type: String,
  },
  log: {
    type: String,
  },
  lat: {
    type: String,
  },
  Pob: [PobDocScheme],

  Remark: {
    type: String,
  },
  createdBy: {
    type: String,
  },

  createdAt: {
    type: Date,
  },
  time: {
    type: String,
    default: formattedCurrentTime
  }
});

const DcrDoctor = mongoose.model("DcrDoctor", DcrdoctorSchema);

module.exports = DcrDoctor;
