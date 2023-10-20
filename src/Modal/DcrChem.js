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



const PobChemScheme = new mongoose.Schema({
  id: {
    type: String,
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

const DcrChemSchema = new mongoose.Schema({
  chemCode: { type: String },
  chemName: { type: String },
  contactPer: { type: String },
  mobile: { type: String },
  address: { type: String },
  Area: { type: String },
  DLNo: { type: String },
  GSTNo: { type: String },
  log: {
    type: String,
  },
  lat: {
    type: String,
  },
  Pob: [PobChemScheme],
  DcrId: {
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

const DcrChem = mongoose.model("DcrChem", DcrChemSchema);

module.exports = DcrChem;
