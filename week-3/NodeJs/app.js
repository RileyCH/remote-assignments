const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(express.static("public"));
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/getData", (req, res) => {
  const queryNum = req.query.Number;
  let result;

  if (queryNum == null || queryNum == 0) {
    result = "Lack of Parameter";
  } else if (isNaN(queryNum)) {
    result = "Wrong Parameter";
  } else {
    const queryNumToNum = Number(queryNum);
    result = ((1 + queryNumToNum) * queryNumToNum) / 2;
  }

  res.send(`${result}`);
});

app.listen(3000);
