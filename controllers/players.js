const Player = require("../models/player");
const Team = require("../models/team");

module.exports = { index, newPage, makePlayer };

function index(req, res) {
  Player.find({}, function (err, players) {
    res.render("players/playersIndex.ejs", { players });
  });
}

function newPage(req, res) {
  res.render("players/newPlayer.ejs");
}

function makePlayer(req, res) {
  const player = new Player(req.body);
  player.save(function (err) {
    if (err) return res.redirect("/players/newPlayer");
    res.redirect("/players/playersIndex");
  });
}
