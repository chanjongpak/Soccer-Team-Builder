const Player = require("../models/player");
const Team = require("../models/team");

module.exports = { index };

function index(req, res) {
  res.render("players/playersIndex.ejs");
}
