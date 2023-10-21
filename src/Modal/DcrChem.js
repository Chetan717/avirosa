const mongoose = require("mongoose");



const currentDate = new Date();
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const amPM = hours >= 12 ? 'PM' : 'AM';
// Convert 24-hour time to 12-hour time
const formattedHours = hours % 12 || 12;
const formattedTime = `${formattedHours}:${minutes.toString().padStart(2, '0')} ${amPM}`;


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
    default: formattedTime
  }
});

const DcrChem = mongoose.model("DcrChem", DcrChemSchema);

module.exports = DcrChem;
