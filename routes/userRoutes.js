const express = require("express");
const router = express.Router();


const { signupUser, loginUser, verifyLoggedinUser } = require("../controllers/userControllers");

router.post("/signup", signupUser);

router.post("/login", loginUser);

router.post("/login/verify", (req,res,next)=>{
    console.log("in verify");next();
},verifyLoggedinUser);

module.exports = router;

