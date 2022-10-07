const User = require("../model/User");
const bcrypt = require("bcrypt");
const {validationResult} = require("express-validator");

/////----------Controllers-----------/////

//---GetUsers-----///

const getUsers = async (req, res) => {
  const allUser = await User.find();

  if (!allUser) return res.status(200).json({msg: "There is no user!!!"});

  res.status(200).json(allUser);
};

//---CreateUser-----///

const createUser = async (req, res) => {
  const {username, email, password} = req.body;
  const error = validationResult(req);

  if (!error.isEmpty()) return res.status(400).json(error.array());

  const hashedPwd = await bcrypt.hash(password, 10);

  try {
    const newUser = await User.create({
      username,
      email,
      password: hashedPwd,
    });

    res.status(201).json({msg: "Your account is successfully created", newUser});
  } catch (error) {
    res.status(500).json({error});
  }
};

//---GetSingleUser-----///

const getSingleUser = async (req, res) => {
  const {id} = req.params;

  if (!id) return res.status(400).json({msg: "Please provide a valid id"});

  try {
    const found = await User.findById(id);
    if (!found) return res.status(400).json({msg: "There is no user with this id"});

    res.status(200).json({msg: "User is found", found});
  } catch (error) {
    res.json(error);
  }
};

module.exports = {getUsers, createUser, getSingleUser};
