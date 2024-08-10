require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log(" Database connected....");
})
.catch((error)=>{
    console.log(error.message);
});

const db = mongoose.connection;

db.on("connected",()=>{
    console.log("database connected..");
});

module.exports = db;


// const mongoose = require("mongoose");
// require("dotenv").config();

// mongoose.connect(process.env.MONGO_URI);

// const db= mongoose.connection;

// db.on('connected',()=>{
//     console.log("connected ..");
// });


// db.on('disconnected',()=>{
//     console.log("disconnected ..");
// });
// module.exports = db;