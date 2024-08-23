const User = require("../model/userModel");

const getAProfile = async (req, res) => {
    // valid user because he is already signed in so no need to validate uname and other things
    try {
        const user_id = req.user._id;
        const profile =await User.findOne({ _id: user_id });
        return res.status(200).json(profile);
    }
    catch (error) {
        return res.send(error);
    }
}




const getAllProfiles = async (req, res) => {
    try {
        const profiles = await User.find();
        res.status(200).json(profiles);
    } catch (error) {
        res.send(error);
    }
}

module.exports = { getAllProfiles, getAProfile }