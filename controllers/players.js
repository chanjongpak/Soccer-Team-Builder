const Player = require("../models/player");
const Team = require("../models/team");

module.exports = { index, newPage, makePlayer };

function index(req, res) {
  res.render("players/playersIndex.ejs");
}

function newPage(req, res) {
  res.render("players/newPlayer.ejs");
}

function makePlayer(req, res) {
  const player = new Player(req.body);
}
