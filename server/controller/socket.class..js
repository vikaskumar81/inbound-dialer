var io = require('socket.io')(http);

class SocketNC
{
    constructor(name, io) {
        this.io = io;
        this.socketevent();    
    }
    socketevent()
    {
        io.sockets.on('connection', function(socket) {
    
            socket.on('login', function(data) {

                //io.emit('send', data);
                io.sockets.in(socket.room).emit('send', data);

            });

            // Fire 'count_chatters' for updating Chatter Count in UI

            socket.on('makecall', function(data) {

                io.emit('callRes', data);

            });

            socket.on('error', function(data) {
                console.log("Found error : "+data);
            });

            socket.on('disconnect', function() {
                console.log("Connection close");
            });

         });
    }
}

module.exports = SocketNC;
