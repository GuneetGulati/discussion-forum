var express = require("express");
var app = express();
mongoose = require("mongoose");
var bodyParser = require("body-parser");
var initial = require("./initial");
var Discussion = require("./models/discussion");
const escapeRegex = require("./regex-escape");

mongoose.connect("mongodb://localhost/TB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use("/public", express.static("public"));
initial();

app.get("/discussion", function (req, res) {
  res.render("home");
});

app.get("/discussion/pages/:page", async (req, res, next) => {
  const resPerPage = 9;
  const page = req.params.page || 1;
  try {
    if (req.query.search) {
      const searchQuery = req.query.search,
        regex = new RegExp(escapeRegex(req.query.search), "gi");

      const foundProducts = await Discussion.find({ question: regex })
        .skip(resPerPage * page - resPerPage)
        .limit(resPerPage);

      const numOfProducts = await Discussion.countDocuments({
        question: regex,
      });

      res.render("discussion", {
        discussion: foundProducts,
        currentPage: page,
        pages: Math.ceil(numOfProducts / resPerPage),
        searchVal: searchQuery,
        numOfResults: numOfProducts,
      });
    }
  } catch (err) {
    throw new Error(err);
  }
});

app.post("/discussion/pages/:page", function (req, res) {
  var ques = req.body.ques;
  var ans = [];
  var newQues = { question: ques, answers: ans };
  Discussion.create(newQues, function (err, newQues) {
    if (err) {
      console.log(err);
    } else {
      console.log(newQues);

      res.redirect("/discussion");
    }
  });
});

app.get("/discussion/:id", function (req, res) {
  Discussion.findById(req.params.id, function (err, disc) {
    if (err) {
      console.log(err);
    } else {
      res.render("question", { discussion: disc });
    }
  });
});

app.post("/discussion/:id", function (req, res) {
  var ans = req.body.ans;

  Discussion.findById(req.params.id, function (err, disc) {
    if (err) {
      console.log(err);
    } else {
      console.log(ans);
      console.log(".................");
      console.log(disc);
      disc.answers.push(ans);
      res.redirect("/discussion/" + req.params.id);
    }
  });
});

app.listen(8080, function () {
  console.log("Server has started");
});
