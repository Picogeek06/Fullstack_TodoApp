var express = require('express'),
    app = express();

app.get('/', function(req, res){
    res.send("Hi there, from Express");
});    

app.listen(3000, function(){
    console.log("APP IS RUNNING ON PORT 3000");
})