const mongoose = require("mongoose");
const db = mongoose.connection;

mongoose.connect("mongodb://127.0.0.1:27017/soccer", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

db.on("connected", function () {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});
