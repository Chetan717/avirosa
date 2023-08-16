const mongoose = require("mongoose");

const chemistSchema = new mongoose.Schema({
  chemCode: { type: String },
  chemName: { type: String },
  mobile: { type: String },
  address: { type: String },
  Area: { type: String },
  DLNo: { type: String },
  GSTNo: { type: String },
});

const Chemist = mongoose.model("Chemist", chemistSchema);

module.exports = Chemist;
