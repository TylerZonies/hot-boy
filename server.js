var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();
var port = process.env.PORT || 6969;
var tables = [];
var waitingList = [];
var tableCount = 0;
app.post("/?", (req, res) => {
    var newRes = req.body;

    if(tableCount < 5){
        tables.push(newRes);
    }else{
        waitingList.push(newRes);
    }
})

app.listen(port, () => {
    console.log("listening at PORT: " + port);
})