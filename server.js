var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();
var port = process.env.PORT || 6969;
var tables = [];
var waitingList = [];
var tableCount = 0;
app.post("/reserve", (req, res) => {
    var newRes = req.body;

    if(tableCount < 5){
        console.log()
        tables.push(newRes);
        tableCount++;
        res.send(true);
    }else{
        waitingList.push(newRes);
        res.send(false);
    }
})

app.get("/api/tables", (req, res) => {
    res.json(tables);
})
app.get("/api/waitlist", (req, res) => {
    res.json(waitlist);
})

app.listen(port, () => {
    console.log("listening at PORT: " + port);
})