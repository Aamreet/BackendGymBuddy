const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const workoutSchema = new Schema({
   title: {
      type: String,
      required: true,
   },
   load: {
      type: Number,
      required: true
   },
   reps: {
      type: String,
      required: true
   },
   user_id: {
      type: String,
      required: true
    }
}, {
   timestamps: true
});

// create model
const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;