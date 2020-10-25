const express = require("express");
const app = express();
const port = 5000;
const seedDB = require("./seedDB");
const mongoose = require("mongoose");
const Data = require("./Models/data");
const cors = require("cors");

app.use(cors());
mongoose.connect("mongodb://mongo:27017/challenge", { useNewUrlParser: true });

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  // we're connected!
});

seedDB();

app.get("/data", (req, res) => {
  Data.find({}, function (err, data) {
    if (err) {
      console.log(err);
    } else {
      res.send(data);
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
