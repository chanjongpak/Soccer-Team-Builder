const Player = require("../models/player");

module.exports = { addReview };

function addReview(req, res) {
  Player.findById(req.params.id, function (err, player) {
    player.ratings.push(req.body);
    player.save(function (err) {
      res.redirect(`/players/${player._id}`);
    });
  });
}
