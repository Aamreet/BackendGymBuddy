const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log(" Database connected....");
    })
    .catch((error) => {
        console.log(error.message);
    });

const db = mongoose.connection;
module.exports = db;

