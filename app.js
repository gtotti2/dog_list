var express = require("express");
var bodyParser = require("body-parser");
var routes = require("./public/routes.js");
var app = express();


app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app);
var port = process.env.PORT || 8080;
var server = app.listen(port, function () {
    console.log("app running on port.", server.address().port);
});