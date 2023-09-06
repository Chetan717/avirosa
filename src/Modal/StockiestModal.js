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
  DateOfBirth: {
    type: String,
  },
  DateOfAni: {
    type: String,
  },
  address: {
    type: String,
  },
  Area: [String],
  Active: {
    type: Boolean,
  },
  createdBy: { type: String },
  approved: { type: Boolean },
});

const Stockiest = mongoose.model("Stockiest", stockiestSchema);

module.exports = Stockiest;
