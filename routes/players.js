var express = require("express");
var router = express.Router();
const playersCtrl = require("../controllers/players");
const player = require("../models/player");

module.exports = router;

router.get("/playersIndex", playersCtrl.index);
router.get("/newPlayer", playersCtrl.newPage);
