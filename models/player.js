const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const playerSchema = new Schema({
  name: String,
  position: {
    type: String,
    enum: ["GK", "CB", "RW", "LW", "ST", "SW", "WF", "WB", "RM", "LM"],
  },
});

const performanceSchema = new Schema({
  rating: {
    type: Number,
    min: 1,
    max: 10,
    default: 1,
  },
});

module.exports = mongoose.model("Player", playerSchema);
