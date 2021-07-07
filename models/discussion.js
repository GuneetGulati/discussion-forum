var mongoose = require("mongoose");

var discussionSchm = new mongoose.Schema({
  question: String,
  answers: [
    {
      type: String,
    },
  ],
});

var Discussion = mongoose.model("Discussion", discussionSchm);

module.exports = Discussion;
