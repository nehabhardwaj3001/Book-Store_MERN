const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require("dotenv").config();

exports.registerUser =  async (req, res) => {
  const { firstname, lastname, email, password, phoneno } = req.body;
  let user;
  const passwordHash = await bcrypt.hash(password, 10);
  try {
    user = new User({
        firstname, lastname, email, password: passwordHash, phoneno
    });
    await user.save();
  } catch (err) {
    console.log(err);
  }

  if (!user) {
    return res.status(500).json({ message: "User not Registered" });
  }
  return res.status(201).json({ user });
}

exports.loginUser = async (req, res) => {
    const { email, password } = req.body;
    let user;
    try {
      user = await User.findOne({email});
      if(user) {
        const checkpassword = await bcrypt.compare(password, user.password);
        console.log(checkpassword,"checkpassword")
        if(checkpassword) {
          // const accessToken = jwt.sign({email}, )
          const accessToken = jwt.sign({ email }, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: "60s",
          });
          console.log("accessToken", )
          res.json({accessToken: accessToken})
        } else {
          res.send("password doesn't match")
        }
      } else {
        res.send("user doesn't exist");
      }
    } catch (err) {
      console.log(err);
    }
  }

  exports.getAllUser = async (req, res) => {
    let users;
    try {
      users = await User.find();
    } catch (err) {
      console.log(err);
    }
  
    if (!users) {
      return res.status(404).json({ message: "No user found" });
    }
    return res.status(200).json({ users });
  };