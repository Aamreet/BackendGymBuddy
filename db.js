const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();
// console.log(process.env.MONGO_URI_GLOBAL);
mongoose.connect(process.env.MONGO_URI_GLOBAL)
    .then(() => {
        console.log(" Database connected....");
    })
    .catch((error) => {
        console.log(error.message);
    });

const db = mongoose.connection;
module.exports = db;

