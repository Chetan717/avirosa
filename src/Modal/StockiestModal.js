const mongoose = require("mongoose");

const stockiestSchema = new mongoose.Schema({
  codeNo: {
    type: String,
    required: true,
  },
  drName: {
    type: String,
    required: true,
  },
  email: String,
  mobileno1: String,
  mobileno2: String,
  DLNO: String,
  area: String,
  gstNo: String,
});

const Stockiest = mongoose.model("Stockiest", stockiestSchema);

module.exports = Stockiest;
