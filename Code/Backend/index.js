const express = require("express");
const app = express();
const port = 5000;
const seedDB = require("./seedDB");
const mongoose = require("mongoose");
const Data = require("./Models/data");
const cors = require("cors");

app.use(cors());

// mongoose.connect("mongodb://mongo:27017/challenge", { useNewUrlParser: true });

mongoose.Promise = Promise;

mongoose.connection.on("connected", () => {
  console.log("Connection Established");
});

mongoose.connection.on("reconnected", () => {
  console.log("Connection Reestablished");
});

mongoose.connection.on("disconnected", () => {
  console.log("Connection Disconnected");
});

mongoose.connection.on("close", () => {
  console.log("Connection Closed");
});

mongoose.connection.on("error", (error) => {
  console.log("ERROR: " + error);
});

const run = async () => {
  await mongoose.connect("mongodb://mongo:27017/challenge", {
    autoReconnect: true,
    reconnectTries: 1000000,
    reconnectInterval: 3000,
  });
};

run().catch((error) => console.error(error));

const db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error:"));
// db.once("open", function () {
//   // we're connected!
// });

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
