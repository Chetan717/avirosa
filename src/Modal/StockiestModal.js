const mongoose = require("mongoose");

const stockiestSchema = new mongoose.Schema({
  Code: {
    type: String,
  },
  contactPer: {
    type: String,
  },
  Name: {
    type: String,
  },
  mobile: {
    type: String,
  },
  DLNo: { type: String },
  GSTNo: { type: String },
  address: {
    type: String,
  },
  Area: {
    type: String,
  },
  Active: {
    type: Boolean,
  },
  approved: { type: Boolean },
});

const Stockiest = mongoose.model("Stockiest", stockiestSchema);

module.exports = Stockiest;
