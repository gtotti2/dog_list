var express = require("express");
var bodyParser = require("body-parser");
var routes = require("./public/routes.js");
var app = express();


app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app);

var server = app.listen(8080, function () {
    console.log("app running on port.", server.address().port);
});