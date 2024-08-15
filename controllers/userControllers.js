const mongoose = require("mongoose");
const User = require("../model/userModel");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const createToken = (_id) => {
    // console.log();
    return jwt.sign({ _id }, process.env.SECRET_KEY, { expiresIn: "1d" });
}

const signupUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        // console.log(email);
        const user = await User.signup(email, password);
        // console.log(user);
        const token = createToken(user._id);
        res.status(200).json({ email, token });
    }
    catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const loginUser = async(req, res) => {
    try {
        const { email, password } = req.body;
        // console.log(email);
        const user = await User.login(email, password);
        // console.log(user);
        const token = createToken(user._id);
        res.status(200).json({ email, token });
    }
    catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = {
    signupUser,
    loginUser
}