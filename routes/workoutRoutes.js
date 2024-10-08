const express = require("express");
const router = express.Router();
const { getAllWorkouts, getSingleWorkout, createWorkout, updateWorkout, deleteWorkout } = require("../controllers/workoutControllers");
const requireAuth = require('../middleware/requireAuth')

router.use(requireAuth);

// get all workouts
router.get("/", getAllWorkouts);

// get single workout
router.get("/:id", getSingleWorkout);

// create new workout
router.post("/", createWorkout);

// update a workout
router.patch("/:id", updateWorkout);

//delete a workout
router.delete("/:id", deleteWorkout);

module.exports = router;