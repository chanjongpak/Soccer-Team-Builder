const Player = require("../models/player");
const Team = require("../models/team");

module.exports = { index, newPage };

function index(req, res) {
  res.render("players/playersIndex.ejs");
}

function newPage(req, res) {
  res.render("players/newPlayer.ejs");
}
