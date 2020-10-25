const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let dataSchema = new Schema({
  age: Number,
  eyeColor: String,
  name: String,
  gender: String,
  company: String,
  email: String,
  phone: String,
  address: String,
});

let Data = mongoose.model("Data", dataSchema);
module.exports = Data;
