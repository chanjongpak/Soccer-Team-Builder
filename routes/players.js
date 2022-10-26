var express = require("express");
var router = express.Router();
const playersCtrl = require("../controllers/players");

router.get("/playersIndex", playersCtrl.index);

module.exports = router;
