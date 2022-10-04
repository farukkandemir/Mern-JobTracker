const router = require("express").Router();

const handleLogin = require("../controllers/loginController");
const {loginIsValid} = require("../middlewares/validations");

router.route("/").post(loginIsValid(), handleLogin);

module.exports = router;
