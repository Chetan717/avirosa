const mongoose = require("mongoose");

const currentDate = new Date();
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const amPM = hours >= 12 ? 'PM' : 'AM';
// Convert 24-hour time to 12-hour time
const formattedHours = hours % 12 || 12;
const formattedTime = `${formattedHours}:${minutes.toString().padStart(2, '0')} ${amPM}`;
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
    default: formattedTime
  }
});


const DcrStockiest = mongoose.model("DcrStockiest", DcrStockiestSchema);

module.exports = DcrStockiest;
