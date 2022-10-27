const express = require("express");
const router = express.Router();
const ratingsCtrl = require("../controllers/ratings");

module.exports = router;

router.post("/players/:id/reviews", ratingsCtrl.addReview);
