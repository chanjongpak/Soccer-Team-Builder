var express = require("express");
var router = express.Router();
const teamsCtrl = require("../controllers/teams");

module.exports = router;

router.get("/teamsIndex", teamsCtrl.index);
router.get("/newTeam", teamsCtrl.newPage);
