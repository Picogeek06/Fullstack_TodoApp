var express = require('express');
var router = express.Router();

router.get('/', function(res, req){
    res.send("hello from todos router");
});

module.exports = router;