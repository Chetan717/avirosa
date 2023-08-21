const mongoose = require("mongoose");

const PobStockScheme = new mongoose.Schema({
  product: {
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
  Pob: [PobStockScheme],
});

const DcrStockiest = mongoose.model("DcrStockiest", DcrStockiestSchema);

module.exports = DcrStockiest;
