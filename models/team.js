const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const teamSchema = new Schema({
  name: String,
  city: String,
  players: [],
  winrate: Number,
});

module.exports = mongoose.model("Team", teamSchema);
