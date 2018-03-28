var express = require('express'),
  app = express(),
  port = process.env.PORT || 3010,
  Task = require('./model/database.class'), //created model loading here
  bodyParser = require('body-parser');
  var http = require('http').Server(app); 
  var serversocket = require('http').createServer(app);
  var io = require('socket.io').listen(serversocket);
  //const cors = require('cors');
  var socketWeb = require('./routes/io.socket.routes');
  io.sockets.on('connection',socketWeb);
  
// Start the Server

/*var corsOptions = {
  origin: 'http://192.168.1.33:4200/',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}*/

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//app.use(cors(corsOptions));


var routes = require('./routes/express.routes'); //importing route
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
  //res.json({data: [1,2,3,4]});
  next();
});

routes(app); //register the route

//app.listen(port);
serversocket.listen(port, function() {

  console.log('Server Started. Listening on *:' + port);

});
//serversocket.listen(3020);

console.log('RestFull API started: ' + port);
