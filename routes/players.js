var express = require("express");
var router = express.Router();
const playersCtrl = require("../controllers/players");

module.exports = router;

router.get("/playersIndex", playersCtrl.index);
router.get("/newPlayer", playersCtrl.newPage);
router.post("/players", playersCtrl.makePlayer);
router.get("/:id", playersCtrl.details);
router.post("/teams/:id/players", playersCtrl.addRoster);
