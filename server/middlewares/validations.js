const {check} = require("express-validator");

const registerIsValid = () => {
  return [
    check("username")
      .trim()
      .exists()
      .withMessage("Username cannot be empty!!!")
      .isLength({min: 5})
      .withMessage("Username must be at least 5 charecters"),

    check("email").isEmail().withMessage("Please provide a proper email!!!"),

    check("password")
      .trim()
      .exists()
      .withMessage("Password cannot be empty")
      .isLength({min: 3})
      .withMessage("Password must be at least 3 charecters"),
  ];
};

const loginIsValid = () => {
  return [
    check("username")
      .trim()
      .exists()
      .withMessage("Username cannot be empty!!!")
      .isLength({min: 5})
      .withMessage("Username must be at least 5 charecters"),

    check("password")
      .trim()
      .exists()
      .withMessage("Password cannot be empty")
      .isLength({min: 3})
      .withMessage("Password must be at least 3 charecters"),
  ];
};

module.exports = {registerIsValid, loginIsValid};
