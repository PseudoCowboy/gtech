var express = require('express');
var routes = require('./routes/index');
var bodyParser = require('body-parser');
var config = require('config');
var cors = require('cors');

var allowedOrigins = config.get('allowedOrigins');

var app = express();

var options = {
  origin: function(url, callback){
    let corsOptions;
    if(allowedOrigins === '*'){
      corsOptions = {
        origin: true
      };
    }
    else if (~allowedOrigins.indexOf(url)) {
      corsOptions = {
        origin: true
      };
    } else {
      corsOptions = {
        origin: false
      };
    }
    callback(null, corsOptions);
  },
  optionsSuccessStatus: 204
};

app.use(cors(options));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/',routes);

var server = app.listen(config.get('server'), function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
