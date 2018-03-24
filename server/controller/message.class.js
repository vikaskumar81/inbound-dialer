var mysql=require('../model/database.class');
var table="message";
exports.List=function(req, res, next){
    mysql.Open();
    var col=["id", "id_user", "name", "filename"];
    mysql.GetList(col, table, function(data) {
    	console.log(JSON.stringify(data));
    	res.send(data);
    });
    mysql.Close();
}

exports.Detail=function(req, res){
    mysql.Open();
    var filter={
      "id":req.params.id
    };
    var col=["id", "id_user", "name", "filename"];
    mysql.Detail(col, table, filter, function(data) {
    	console.log(JSON.stringify(data));
    	res.send(data);
    });
    mysql.Close();
    return res;
}

exports.Update=function(req, res){
    mysql.Open();
    var data= req.body.data;
    var filter={
      "id":req.params.id
    };
    mysql.Update(data, table, filter, function(data) {
		res.send(data);
	});
    mysql.Close();
    return res;
}

exports.Delete=function(req, res){
    mysql.Open();
    var user={
        "id":req.params.id
    };

    mysql.Remove(user, table, function(data) {
		res.send(data);
	});
    mysql.Close();
}

exports.AddNew=function(req, res){
    mysql.Open();
    var user=req.params.data;

    mysql.AddNew(table, user, function(data) {
		res.send(data);
	});
    mysql.Close();
}
