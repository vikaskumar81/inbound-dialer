var mysql=require('../model/database.class');
const fs = require('fs');
var table="did";
exports.List=function(req, res, next){
    mysql.Open();
    var col=["id", "number", "idsupplier", "areacode", "did_rate", "setup_cost"];
    mysql.GetList(col, table, function(data) {
    	console.log(JSON.stringify(data));
    	res.send(data);
    });
    mysql.Close();
}

exports.Detail=function(req, res){
    mysql.Open();
	console.log("Hello We Are into detail function")
	console.log(req.body);
    var filter={
      "id":req.params.id
    };
    var col=["id", "number", "idsupplier", "areacode", "did_rate", "setup_cost"];
    mysql.Detail(col, table, filter, function(data) {
    	console.log(JSON.stringify(data));
    	res.send(data);
    });
    mysql.Close();
    return res;
}

exports.Update=function(req, res){
    mysql.Open();
	console.log("Hello We Are into Update function")
    var data= req.body.data;    
	var filter={
      "id":req.body.id
    };
    mysql.Update(data, table, filter, function(data) {
		res.send(data);
	});
    mysql.Close();
    return res;
}

exports.Delete=function(req, res){
console.log("Hello We Are into Delete function")
    mysql.Open();
    var user={
        "id":req.params.id
    };

    mysql.Remove(user, table, function(data) {
		res.send(data);
	});
    mysql.Close();
	return res;
}

exports.AddNew=function(req, res){
    mysql.Open();
    var user=req.body.data;	
	console.log("Hello We are in Add New row in table");
	console.log(user);
    mysql.AddNew(table, user, function(data) {
		res.send(data);
	});
    mysql.Close();
}
