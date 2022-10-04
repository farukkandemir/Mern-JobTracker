const User = require("../model/User");
const {validationResult} = require("express-validator");
const bcyrpt = require("bcrypt");
const jwt = require("jsonwebtoken");

const handleLogin = async (req, res) => {
  const {username, password} = req.body;

  const error = validationResult(req);

  if (!error.isEmpty()) return res.status(400).json(error.array());

  const foundUser = await User.findOne({username: username});

  if (!foundUser)
    return res.status(400).json({msg: `There is user with the username ${username}`});

  const pwdMatch = await bcyrpt.compare(password, foundUser.password);

  if (!pwdMatch) return res.status(400).json({msg: "Password is not correct"});

  const accessToken = jwt.sign({username}, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "5m",
  });

  res.status(200).json({msg: "Suscessfully logged in", accessToken});
};

module.exports = handleLogin;
