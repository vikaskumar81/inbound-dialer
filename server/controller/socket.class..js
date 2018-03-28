var json = require('json');

exports.Login=function(data){
    var data = JSON.parse(data);
    console.log("We are into Login function : "+data);
    io.sockets.emit("loginRes", data.phonestatus);
};

exports.Makecall=function(data){
    var data = JSON.parse(data);
    console.log("We are into make call function : "+data);
    io.sockets.emit("callRes", data.callstatus);
};

exports.Error=function(data){
    console.log("Sockets has error : "+data);
};

exports.Disconnect=function(data){
    console.log("Socket disconnected");
};