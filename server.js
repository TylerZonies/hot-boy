var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();
var port = 6969;

app.listen(port, () => {
    console.log("listening at PORT: " + port);
})