const mongoose = require("mongoose");

const PobChemScheme = new mongoose.Schema({
  id: {
    type: String,
  },
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

const DcrChemSchema = new mongoose.Schema({
  chemCode: { type: String },
  chemName: { type: String },
  contactPer: { type: String },
  mobile: { type: String },
  address: { type: String },
  Area: { type: String },
  DLNo: { type: String },
  GSTNo: { type: String },
  Detail: {
    type: String,
  },
  lit: {
    type: String,
  },
  Pob: [PobChemScheme],
  DcrId: {
    type: String,
  },
  createdBy: {
    type: String,
  },
  createdAt: {
    type: Date,
  },
});

const DcrChem = mongoose.model("DcrChem", DcrChemSchema);

module.exports = DcrChem;
