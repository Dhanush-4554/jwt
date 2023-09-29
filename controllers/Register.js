const User = require("../models/User");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const Register = async (req, res) => {
  const {
    UserName,
    UserNumber,
    UserEmail,
    UserAddress,
    UserBio,
    UserGender,
    UserPassword,
  } = req.body;

  try {
    const exsistingEmail = await User.findOne({ UserEmail: UserEmail });
    if (exsistingEmail)
      return res.status(400).json({ message: "Email Already Registered" });
  } catch (error) {
    console.log(error);
  }

  const hashedPass = bcrypt.hashSync(UserPassword);

  const UserObj = {
    UserName,
    UserNumber,
    UserEmail,
    UserAddress,
    UserBio,
    UserGender,
    UserPassword: hashedPass,
  };

  try {
    const Users = await User.create(UserObj);

    return res.status(201).json({
      Users: Users,
    });
  } catch (error) {
    console.log(error);
  }
};
module.exports = Register;
