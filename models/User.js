const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  UserName: {
    type: String,
    required: true,
    unique: true,
  },
  UserNumber: {
    type: String,
    required: true,
  },
  UserEmail: {
    type: String,
    required: true,
    unique: true,
  },
  UserAddress: {
    type: String,
    required: true,
  },
  UserBio: {
    type: String,
    required: true,
  },
  UserGender: {
    type: String,
    required: true,
  },
  UserPassword: {
    type: String,
    required: true,
    minlength: 6,
  },
});

module.exports = new mongoose.model("UserDB", UserSchema);
