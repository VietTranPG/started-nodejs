const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json())
var controllers = require(__dirname + '/api/controllers');
app.use(controllers);
module.exports = app;