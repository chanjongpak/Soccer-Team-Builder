const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const teamSchema = new Schema({
  name: String,
  city: String,
  players: [],
  winrate: {
    type: Number,
    min: 1,
    max: 100,
  },
});

module.exports = mongoose.model("Team", teamSchema);
