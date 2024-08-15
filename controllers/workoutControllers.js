const mongoose = require("mongoose");
const workoutModel = require("../model/workoutModel");

// get all workouts
const getAllWorkouts = async (req, res) => {
    try {
        // console.log(" someone wants all the workouts..");
        const user_id= req.user._id;
        const allWorkouts = await workoutModel.find({user_id});
        res.status(200).json({
            Workouts: allWorkouts
        });
    } catch (error) {
        res.send(error);
    }
};

// get a single workout
const getSingleWorkout = async (req, res) => {
    try {
        const { id } = req.params;
        // check if the id is valid or not
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).send(" Invalid Id ");
        }
        const workout = await workoutModel.findById(id);
        if (!workout) {
            return res.send("No workout like such exist");
        }
        return res.status(200).json(workout);
    } catch (error) {
        res.send(error);
    }
};

// create a workout
const createWorkout = async (req, res) => {
    try {
        console.log(req.body);
        // res.send("success");
        const user_id = req.user._id;
        const savedWorkout = await workoutModel.create({...req.body, user_id});
        res.status(200).json(savedWorkout);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ "error": "Internal Server Error" });
    }
};

// update a workout
const updateWorkout = async (req, res) => {
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).send(" Invalid Id ");
        }
        const updatedWorkout = await workoutModel.findOneAndUpdate({ _id: id }, {
            ...req.body
        },{
            new:true
        });

        if (!updatedWorkout) {
            return res.status(404).send("No such workout exists.");
        }
        res.json(updatedWorkout);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ "error": "Internal Server Error" });
    }
};

const deleteWorkout = async (req, res) => {
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).send(" Invalid Id ");
        }
        const deletedWorkout = await workoutModel.findByIdAndDelete(id);
        if (!deletedWorkout) {
            return res.status(404).send("No such workout exists.");
        }
        res.json(deletedWorkout);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ "error": "Internal Server Error" });
    }
};


module.exports = {
    getAllWorkouts,
    getSingleWorkout,
    createWorkout,
    updateWorkout,
    deleteWorkout
}