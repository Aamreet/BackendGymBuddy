const dotenv = require("dotenv");
const db = require("./db");
const express = require("express");
const workoutRoutes = require("./routes/workoutRoutes");
const userRoutes = require("./routes/userRoutes");

dotenv.config();
const app = express();
app.use("/api/user", userRoutes);
app.use("/api/workouts", workoutRoutes);

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is listening ... ");
});