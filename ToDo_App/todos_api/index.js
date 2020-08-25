var express = require("express"),
  app = express();
var bodyParser = require("body-parser");

var todoRoutes = require("./routes/todos");
//const bodyParser = require("body-parser");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname +'/public'));


app.get("/", function (req, res) {
  //res.send("Hello from ROOT Route")
  res.sendFile("index.html");
});



app.use("/api/todos", todoRoutes);

app.listen(8080, function () {
  console.log("APP IS RUNNING ON PORT 8080");
});
