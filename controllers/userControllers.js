const User = require("../model/userModel");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.SECRET_KEY, { expiresIn: "1d" });
}

const signupUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.signup(email, password);
        const token = createToken(user._id);
        res.status(200).json({ email, token });
    }
    catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const loginUser = async (req, res) => {
    try {
        console.log(req.url, " inside loginUser");
        const { email, password } = req.body;
        const user = await User.login(email, password);
        const token = createToken(user._id);
        res.status(200).json({ email, token });
    }
    catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const verifyLoggedinUser= async(req, res)=>{
    try {
        //verify jwt token
        console.log(" verifyLoggedinUser ");
        const token= req.headers.authorization.split(' ')[1];
        const decoded= jwt.verify(token, process.env.SECRET_KEY);
        console.log(decoded);
        res.send("Valid");
    } catch (error) {
        console.log("invalid");
        res.send("Invalid");
    }
}

module.exports = {
    signupUser,
    loginUser,
    verifyLoggedinUser
}