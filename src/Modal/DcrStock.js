const mongoose = require("mongoose");

const PobStockScheme = new mongoose.Schema({
  id: {
    type: String,
  },
  Product: {
    type: String,
  },
  Qnt: {
    type: Number,
  },
  value: {
    type: Number,
  },
});

const DcrStockiestSchema = new mongoose.Schema({
  Code: {
    type: String,
  },
  Name: {
    type: String,
  },
  mobile: {
    type: String,
  },
  Collection: {
    type: Number,
  },
  log: {
    type: String,
  },
  lat: {
    type: String,
  },
  DcrId: {
    type: String,
  },
  Pob: [PobStockScheme],
  createdBy: {
    type: String,
  },

  createdAt: {
    type: Date,
  },
});

const DcrStockiest = mongoose.model("DcrStockiest", DcrStockiestSchema);

module.exports = DcrStockiest;
