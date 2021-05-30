const mongoose = require("mongoose");

var mongoURL =
  "mongodb+srv://pizzeria:bytunet@cluster0.v79yc.mongodb.net/mern-pizza";

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });

var db = mongoose.connection;

db.on("connected", () => {
  console.log("Mongo DB Connection Succesfull!!");
});

db.on("error", () => {
  console.log("Mongo DB Connection Failed!!");
});

module.exports = mongoose;
