const mongoose = require("mongoose");

const tourProgramSchema = new mongoose.Schema({
  startDate: {
    type: Date,
    required: true,
  },
  lastDate: {
    type: Date,
    required: true,
  },
  workWith: {
    type: String,
  },
  headQ: {
    type: String,
  },
  area: {
    type: String,
  },
  createdBy: {
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
});

const TourProgram = mongoose.model("TourProgram", tourProgramSchema);

module.exports = TourProgram;
