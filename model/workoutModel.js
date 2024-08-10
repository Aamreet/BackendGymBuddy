const { Timestamp } = require("bson");
const mongoose = require("mongoose");
const { type } = require("os");

const Schema = mongoose.Schema;
const workoutSchema = new Schema({
   title: {
      type: String,
      required: true,
      unique: true
   },
   load: {
      type: Number,
      required: true
   },
   reps: {
      type: String,
      required: true
   }
}, {
   timestamps: true
});

// create model
const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;