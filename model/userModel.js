const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const Schema = mongoose.Schema;
const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
    
});

userSchema.statics.signup = async function (email, password) {
    if (!email || !password) {
        throw Error('All Fields must be filled!!')
    }
    if (!validator.isEmail(email)) {
        throw Error('Enter a valid Email')
    }
    // if(!validator.isStrongPassword(password)){
    //     throw Error('Enter a strong password')
    // }

    const isEmailExist = await this.findOne({ email });
    if (isEmailExist) {
        throw Error('Email already in use')
    }

    //hash pwd
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await this.create({ email, password: hashedPassword });
    return user;
}


userSchema.statics.login = async function (email, password) {
    if (!email || !password) {
        throw Error('All Fields must be filled!!')
    }

    const user = await this.findOne({ email });
    if (!user) {
        throw Error('Email/ password Invalid')
    }
    
    //pwd comparisson
     const isMatch = await bcrypt.compare( password, user.password);
     if(!isMatch){
         throw Error("Invalid Password");
     }
     return user;
}


const User = mongoose.model("User", userSchema);
module.exports = User;