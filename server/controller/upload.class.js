var mysql=require('../model/database.class');
var table="uploads";
exports.List=function(req, res, next){
    mysql.Open();
    var col=["id", "id_user", "filename", "leads", "dialed", "answered", "noanswer","busy","failed","conjestion","duration"];
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
    var col=["id", "id_user", "filename", "leads", "dialed", "answered", "noanswer","busy","failed","conjestion","duration"];
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
    mysql.Update(data, table, filter);
    mysql.Close();
    return res;
}

exports.Delete=function(req, res){
    mysql.Open();
    var user={
        "id":req.params.id
    };

    mysql.Remove(user, table);
    mysql.Close();
}

exports.AddNew=function(req, res){
    mysql.Open();
    var user=req.params.data;

    mysql.AddNew(table, data);
    mysql.Close();
}
