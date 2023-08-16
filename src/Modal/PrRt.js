const mongoose = require("mongoose");

const schemeSchema = new mongoose.Schema({
  id: { type: Number },
  MainPro: { type: String },
  FreeProduct: { type: String },
});

const productSchema = new mongoose.Schema({
  ProductName: { type: String },
  Packing: { type: String },
  MRP: { type: Number },
  PTR: { type: Number },
  PTS: { type: Number },
  scheme: [schemeSchema], // Array of strings for schemes
  Active: { type: Boolean },
});

const PrRt = mongoose.model("Product", productSchema);

module.exports = PrRt;
