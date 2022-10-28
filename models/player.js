const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const performanceSchema = new Schema({
  rating: {
    type: Number,
    min: 1,
    max: 10,
    default: 5,
  },
  comment: String,
});

const playerSchema = new Schema({
  name: String,
  position: {
    type: String,
    enum: [
      "Goalkeeper",
      "Centerback",
      "Rightwing",
      "Leftwing",
      "Striker",
      "Sweeper",
      "Wingforward",
      "Wingback",
      "Rightmid",
      "Leftmid",
    ],
  },
  age: Number,
  totalGoals: { type: Number, default: 0 },
  ratings: [performanceSchema],
});

module.exports = mongoose.model("Player", playerSchema);
