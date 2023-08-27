const mongoose = require("mongoose");

const tourDateSchema = new mongoose.Schema({
  Date: {
    type: String,
  },
  workWith: {
    type: String,
  },
  area: {
    type: String,
  },
  Activity: {
    type: String,
  },
  ExpectedBuisness: {
    type: String,
  },
  createdAt: {
    type: Date,
  },
  DcrId: {
    type: String,
  },
  Act: {
    type: Boolean,
  },
  Apv: {
    type: Boolean,
  },
  Id: {
    type: String,
  },
  submited: {
    type: Boolean,
  },
});

const TourDate = mongoose.model("TourDate", tourDateSchema);

module.exports = TourDate;
