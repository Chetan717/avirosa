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



const PobStockScheme = new mongoose.Schema({
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

const DcrStockiestSchema = new mongoose.Schema({
  Code: {
    type: String,
  },
  Name: {
    type: String,
  },
  mobile: {
    type: String,
  },
  Collection: {
    type: Number,
  },
  log: {
    type: String,
  },
  lat: {
    type: String,
  },
  DcrId: {
    type: String,
  },
  Pob: [PobStockScheme],
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

const DcrStockiest = mongoose.model("DcrStockiest", DcrStockiestSchema);

module.exports = DcrStockiest;
