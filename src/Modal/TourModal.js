const mongoose = require("mongoose");

const tourProgramSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  currentBuisness: Number,
  area: String,
  actualTp: String,
  expectedBuisness: Number,
  workingWith: String,
});

const TourProgram = mongoose.model("TourProgram", tourProgramSchema);

module.exports = TourProgram;
