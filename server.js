const dotenv = require("dotenv");
const db = require("./db");
const express = require("express");
const workoutRoutes = require("./routes/workoutRoutes");
const userRoutes = require("./routes/userRoutes");
const cors = require("cors");


dotenv.config();
app.use(cors());

const fun1 = (req, res, next) => {
    // Add CORS headers manually
    res.setHeader('Access-Control-Allow-Origin', '*'); // Allow all origins
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Allow specific HTTP methods
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // Allow specific headers
    next();
}



const app = express();
app.use("/api/user", fun1 ,userRoutes);
app.use("/api/workouts",fun1, workoutRoutes);

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is listening ... ");
});