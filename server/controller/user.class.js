var mysql=require('../model/database.class');

exports.Detail=function(req, res, next){
    mysql.Open();
    var col=['username','password','company', 'contact', 'minutes'];
    var filter={
      "id":req.params.id
    };
    mysql.Detail(col, "users", filter, function(data) {
    	console.log(JSON.stringify(data));
    	res.end(data);
    });
    mysql.Close();
}

exports.List=function(req, res, next){
    mysql.Open();
    var col=['username','password','company', 'contact', 'minutes'];
    mysql.GetList(col, "users", function(data) {
    	console.log(JSON.stringify(data));
    	res.end(data);
    });
    mysql.Close();
}

exports.Update=function(req, res){
    mysql.Open();
    var data= req.body.data;
    var filter={
      "id":req.params.id
    };    
    mysql.Update(data, "users", filter, function(data) {
      //res.end(data);
    });
    mysql.Close();
    return res;
}

exports.Delete=function(req, res){
    mysql.Open();
    var user={
        "id":req.params.id
    };    
    mysql.Remove(user, "users", function(data) {
      res.end(data);
    });
    mysql.Close();
}

exports.Login=function(req, res){
    mysql.Open();
    var username= req.params.username;
    var password = req.params.password;
    connection.query('SELECT * FROM users WHERE username = ?',[username], function (error, results, fields) {
    if (error) {
      console.log("error ocurred",error);
      res.end({
        "code":400,
        "failed":"error ocurred"
      })
    }
    else
    {
      // console.log('The solution is: ', results[0].password,req.body.password,req.body.role);
      if(results.length >0){
        if(results[0].password == req.params.password){
          if(results[0].role == req.params.role){
            res.send({
              "code":200,
              "success":"login sucessfull"
            })
          }
          else{
            res.end({
              "code":403,
              "success":"You have logged in from wrong user role"
            })
          }
  
        }
        else{
          res.end({
               "code":403,
               "success":"Username and Password does not match"
          })
        }
  
      }
      else{
        res.end({
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
    mysql.Open();
    var user=JSON.parse(req.body.data);
    mysql.AddNew("users", user, function(data) {
		res.end(data);
	});
    mysql.Close();
}
