var mongoose = require("mongoose");
var Discussion = require("./models/discussion");

data = [
  {
    question: "dlksmvskdmvsmvmvvm",
    answers: [
      "Heloo Lorem ipprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit",
      "I Lorem ipsum d proident, sunt in culpa qui officia deserunt mollit anim ",
      "am Loreaboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est",
      "a Loremisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      "badass cat cupidatat non proident, sunt in culpa qui officia deserunt",
    ],
  },
  {
    question: "hathora tyagi",
    answers: ["Heloo", "Icscscs", "am", "a", "badass"],
  },
  {
    question: "hathora",
    answers: ["Heloo", "Icscscs", "am", "a", "badass"],
  },
  {
    question: "hata tyagi",
    answers: ["Heloo", "Icscscs", "am", "a", "badass"],
  },
  {
    question: "sslksmvskdmvsmvmvvm",
    answers: ["Heloo", "I", "am", "a", "badass"],
  },
];

function initial() {
  Discussion.create(data, function (err, ques) {
    if (err) console.log(err);
    else {
      console.log("discussion initiated");
    }
  });
}

module.exports = initial;
