const Player = require("../models/player");
const Team = require("../models/team");
const { router } = require("../server");

module.exports = { index, newPage, makeTeam };

function index(req, res) {
  Team.find({}, function (err, teams) {
    res.render("teams/teamsIndex.ejs", { teams });
  });
}

function newPage(req, res) {
  res.render("teams/newTeam.ejs");
}

function makeTeam(req, res) {
  const team = new Team(req.body);
  team.save(function (err) {
    if (err) return res.redirect("/teams/newTeam");
    res.redirect("/teams/teamsIndex");
  });
}
