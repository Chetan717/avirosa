const mongoose = require("mongoose");

const AreaSchema = new mongoose.Schema({
  AreaName: { type: String },
  Type: { type: String },
  Active: { type: Boolean },
});

const Area = mongoose.model("Area", AreaSchema);

module.exports = Area;
