var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  Task = require('./model/database.class'), //created model loading here
  bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./routes/nexibell.routes'); //importing route
routes(app); //register the route

app.listen(port);

console.log('RestFull API started: ' + port);