const router = require("express").Router();
const {registerIsValid} = require("../middlewares/validations");
const {createUser} = require("../controllers/userController");

router.route("/").post(registerIsValid(), createUser);

module.exports = router;
