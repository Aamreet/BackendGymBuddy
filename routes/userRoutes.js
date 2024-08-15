const express= require("express");
const router = express.Router();
const bodyParser = require("body-parser")
const {signupUser, loginUser} = require("../controllers/userControllers");
// const setup = require("../middleware/setup");

// router.use(setup);

router.use(bodyParser.json());
// signupUser
router.post("/signup",signupUser);

// loginUser
router.post("/login", loginUser );

module.exports = router;

