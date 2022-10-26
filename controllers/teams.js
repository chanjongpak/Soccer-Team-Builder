const Player = require("../models/player");
const Team = require("../models/team");
const { router } = require("../server");

module.exports = { index, newPage };

function index(req, res) {
  res.render("teams/teamsIndex.ejs");
}

function newPage(req, res) {
  res.render("teams/newTeam.ejs");
}
