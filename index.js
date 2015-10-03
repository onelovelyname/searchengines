var express = require("express");
var app = express();
var port = 3000;
var appController = require('./server/app/appController.js');
var bodyParser = require('body-parser');

app.listen(port);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname + '/client'));

app.post('/api/search', appController.searchEngines);

