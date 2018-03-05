var mysql=require('../model/database.class');

exports.List=function(req, res, next){
    mysql.Open();
    var col=['id','username','password','type','company', 'contact', 'minutes', 'max_price', 'max_agent'];
    //mysql.SqlQuery("SELECT `id`, `username`, `password` from users");
    //var data=mysql.AddNew("users", {"username":"test", "password":"text"});
    mysql.GetList(col, "users", function(data) {
    	console.log(JSON.stringify(data));
    	res.send(data);
    });
    mysql.Close();
}

exports.Update=function(req, res){
    mysql.Open();
    var data= req.body.data;
    var filter={
      "id":req.body.id
    };
    mysql.Update(data, "users", filter);
    mysql.Close();
    return res;
}

exports.Delete=function(req, res){
    mysql.Open();
    var user={
        "id":req.body.id
    };

    mysql.Remove(user, "users");
    mysql.Close();
}

exports.Login=function(req, res){
    mysql.Open();
    var username= req.body.username;
    var password = req.body.password;
    connection.query('SELECT * FROM users WHERE username = ?',[username], function (error, results, fields) {
    if (error) {
      console.log("error ocurred",error);
      res.send({
        "code":400,
        "failed":"error ocurred"
      })
    }
    else
    {
      // console.log('The solution is: ', results[0].password,req.body.password,req.body.role);
      if(results.length >0){
        if(results[0].password == req.body.password){
          if(results[0].role == req.body.role){
            res.send({
              "code":200,
              "success":"login sucessfull"
            })
          }
          else{
            res.send({
              "code":403,
              "success":"You have logged in from wrong user role"
            })
          }
  
        }
        else{
          res.send({
               "code":403,
               "success":"Username and Password does not match"
          })
        }
  
      }
      else{
        res.send({
          "code":403,
          "success":"USername does not exits"
            });
      }
    }
    });
}

exports.Logout=function(req, res){
    
}

exports.AddNew=function(req, res){
    //var today = new Date();
    mysql.Open();
    var user=req.body.data;
    /*{
        "username":req.body.username,
        "email":req.body.email,
        "password":req.body.password,
        "company":req.body.company,
        "contact":req.body.contact,
        "type":0,
        "created":today,
        "modified":today
    }*/

    mysql.AddNew("users", data);
    mysql.Close();
}
