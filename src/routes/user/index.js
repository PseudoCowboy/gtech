var express = require('express');
var api = express.Router();

module.exports = api;

api.get('/', (req, res, next) => {
  res.json({a:1});
});
