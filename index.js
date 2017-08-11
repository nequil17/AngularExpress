var express = require('express');
var bodyParser = require('body-parser');
var api = require('./api');

var app = express();
var path = require('path');
var jsonPath = path.join(__dirname, 'data.json');
var clientPath = path.join(__dirname, 'client');
app.use(express.static(clientPath));

app.use(bodyParser.json());
app.use('/api', api)

app.listen(3000);