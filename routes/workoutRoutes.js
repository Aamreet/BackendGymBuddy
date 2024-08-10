const express = require("express");
const router = express.Router();

// get all workouts
router.get("/api/workouts",(req, res)=>{
    res.send(" all workouts");
});

// get single workout
router.get("/api/workouts",(req, res)=>{
    res.send(" all workouts");
});

// create new workout
router.post("/api/workouts",(req, res)=>{
    res.send(" all workouts");
});

// update a workout
router.patch("/api/workouts",(req, res)=>{
    res.send(" all workouts");
});