const mongoose = require("mongoose");


const currentDate = new Date();
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const amPM = hours >= 12 ? 'PM' : 'AM';
// Convert 24-hour time to 12-hour time
const formattedHours = hours % 12 || 12;
const formattedTime = `${formattedHours}:${minutes.toString().padStart(2, '0')} ${amPM}`;
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
    default: formattedTime
  }
});

const DcrDoctor = mongoose.model("DcrDoctor", DcrdoctorSchema);

module.exports = DcrDoctor;
