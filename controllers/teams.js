const Player = require("../models/player");
const Team = require("../models/team");
const { router } = require("../server");

module.exports = { index, newPage, makeTeam, teamDetail };

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

function teamDetail(req, res) {
  Team.findById(req.params.id)
    .populate("roster")
    .exec(function (err, team) {
      Player.find({})
        .where("_id")
        .nin(team.roster)
        .exec(function (err, players) {
          res.render("teams/teamDetail.ejs", {
            team,
            players,
          });
        });
    });
}

// function addRoster(req, res) {
//   console.log("got hit");
//   Team.findById(req.params.id, function (err, team) {
//     team.roster.push(req.body.playerId);
//     team.save(function (err) {
//       res.redirect(`/teams/${team._id}`);
//     });
//   });
// }
