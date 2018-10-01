const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
var controllers = require(__dirname + '/api/controllers');
app.use(controllers);
module.exports = app;