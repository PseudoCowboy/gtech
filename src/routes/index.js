var express = require('express');
// var bodyParser = require('body-parser');
var api = express.Router();

var user = require('./user');

module.exports = api;

api.use('/user', user);
