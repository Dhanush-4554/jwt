const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email is Required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is Required"],
  },
});


userSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email });
  if (user) {
    var auth =1 ;
    if (password = user.password){
      auth = 1;
    }
    else auth = 0;

    if (auth) {
      return user;
    }
    throw Error("incorrect password");
  }
  throw Error("incorrect email");
};

module.exports = mongoose.model("Users", userSchema);