const mongoose = require("mongoose");

const fareSchema = new mongoose.Schema({
  FareName: { type: String },
  HeadQuaterName: { type: String },
  AreaName: { type: String },
  OneWayKM: { type: Number },
  FarePrice: { type: Number },
  TravelMode: { type: String },
  Active: { type: Boolean },
});

const Fare = mongoose.model("Fare", fareSchema);

module.exports = Fare;
