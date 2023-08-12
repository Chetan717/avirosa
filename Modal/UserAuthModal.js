const mongoose = require("mongoose");

const UserAuthShema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
    unique: true,
  },
  Mobile: {
    type: Number,
    required: true,
  },
  TypeOfUser: {
    type: String,
    required: true,
  },
  Password: {
    type: String,
    required: true,
  },
  Address: {
    type: String,
    required: true,
  },
  otp: {
    type: Number,
  },
});

const UserAuthModal = new mongoose.model("UserAvirosa", UserAuthShema);

module.exports = UserAuthModal;
