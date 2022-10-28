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
  roster: [{ type: Schema.Types.ObjectId, ref: "Player" }],
});

module.exports = mongoose.model("Team", teamSchema);
