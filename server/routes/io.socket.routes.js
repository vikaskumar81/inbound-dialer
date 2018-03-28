
'use strict';

module.exports = function (socket) {
    var events = require('../controller/socket.class');
    socket.on('login', events.Login);
    socket.on('login', events.Makecall);
    socket.on('error', events.Error);
    socket.on('disconnect', events.Disconnect);
  };