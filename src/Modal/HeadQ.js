const mongoose = require("mongoose");

const HeadQSchema = new mongoose.Schema({
  HeadQuaterName: { type: String },
  Active: { type: Boolean },
});

const HeadQ = mongoose.model("HeadQ", HeadQSchema);

module.exports = HeadQ;
