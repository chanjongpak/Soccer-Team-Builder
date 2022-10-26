var express = require("express");
var router = express.Router();
const playersCtrl = require("../controllers/players");

module.exports = router;

router.get("/playersIndex", playersCtrl.index);
router.get("/newPlayer", playersCtrl.newPage);
router.post("/", playersCtrl.makePlayer);
