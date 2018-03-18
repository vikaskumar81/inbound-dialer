var mysql=require('../model/database.class');
var cookieParser = require('cookie-parser');
var session = require('express-session');

app.use(cookieParser());
app.use(session({secret: "gventureseeksforcode"}));

var table="users";

exports.Login=function(req, res){
    mysql.Open();
    var filter={
      "username":req.params.username
    };
    var username= req.params.username;
    var password = req.params.password;
    mysql.SqlQuery('SELECT * FROM `users` WHERE ?');
    mysql.RunQueryFilter(filter, function (data) {
      if(data.length >0){
        if(data[0].password == req.params.password){
            res.send({
              "code":200,
              "success":"login sucessfull"
            });
          }
          else{
            res.send({
              "code":480,
              "success":"You have logged in from wrong user role"
            });
          }
  
        }
        else{
          res.send({
               "code":403,
               "success":"Username and Password does not match"
          });
        }
  
    });
}

exports.Logout=function(req, res){
    
}
