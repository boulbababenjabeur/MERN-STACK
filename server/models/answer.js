const mongoose = require("mongoose");
var dateFormat = require("dateformat");
var Schema = mongoose.Schema;
var now = new Date();

var Answer = new Schema({
  Question: { type: Schema.Types.ObjectId, ref: "question" },
  Body: { type: String, required: [true, "Answer Body required"] },
  Writer: { type: Schema.Types.ObjectId, ref: "User" },
  Date: { type: Date, default: Date.now() },
  Filee: { type: Array, default: null },
});
module.exports = mongoose.model("answer", Answer);

