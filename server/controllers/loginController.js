const User = require("../model/User");
const {validationResult} = require("express-validator");
const bcyrpt = require("bcrypt");
const jwt = require("jsonwebtoken");

const handleLogin = async (req, res) => {
  const {username, password} = req.body;

  const error = validationResult(req);

  if (!error.isEmpty()) return res.status(400).json(error.array());

  const [foundUser] = await User.find({username});

  if (!foundUser)
    return res.status(400).json({msg: `There is user with the username ${username}`});

  const pwdMatch = await bcyrpt.compare(password, foundUser.password);

  if (!pwdMatch) return res.status(401).json({msg: "Password is not correct"});

  const accessToken = jwt.sign({username}, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "30m",
  });

  const refreshToken = jwt.sign({username}, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "1d",
  });

  foundUser.refreshToken = refreshToken;
  await foundUser.save();

  // res.cookie("jwt", refreshToken, {httpOnly: true, maxAge: 24 * 60 * 60 * 1000});
  res.status(200).json({msg: "Suscessfully logged in", accessToken, foundUser});
};

module.exports = handleLogin;
