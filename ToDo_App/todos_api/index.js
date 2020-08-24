var express = require("express"),
  app = express();
bodyParser = require("body-parser");

var todoRoutes = require("./routes/todos");
const bodyParser = require("body-parser");
//const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  //res.send("{data: 234567890678}")
  res.send("Hello from ROOT Routes");
});

app.use("/api/todos", todoRoutes);

app.listen(3000, function () {
  console.log("APP IS RUNNING ON PORT 3000");
});
