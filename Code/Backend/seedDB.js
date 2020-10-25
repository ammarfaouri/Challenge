const mongoose = require("mongoose");
const Data = require("./Models/data");
const data = require("./data.json");

function seedDB() {
  Data.find({}, function (err, datas) {
    if (err) {
      console.log(err);
    } else if (datas.length == 0) {
      Data.create(data, function (err) {
        if (err) {
          console.log(err);
        } else {
          console.log("data successfully added to collection");
        }
      });
    }
  });
}

module.exports = seedDB;
