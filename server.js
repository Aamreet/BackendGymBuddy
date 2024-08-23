const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const workoutRoutes = require("./routes/workoutRoutes");
const userRoutes = require("./routes/userRoutes");
const profileRoutes = require("./routes/profileRoutes");

const cors = require("cors");
const app = express();
const db = require("./db");

app.use(cors());
app.use(express.json());
app.use(express.text());

//routes
app.use("/api/user" ,userRoutes);
app.use("/api/workouts", workoutRoutes);
app.use("/api", profileRoutes);

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is listening ... ", process.env.PORT);
});