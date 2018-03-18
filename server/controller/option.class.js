var mysql=require('../model/database.class');
exports.Message=function(req, res, next){
    mysql.Open();
    mysql.SqlQuery("SELECT `id` `value`, `name` `label` FROM `message`");
    mysql.RunQuery(function(data) {
    	console.log(JSON.stringify(data));
    	res.send(data);
    });
    mysql.Close();
}

exports.Supplier=function(req, res){
    mysql.Open();
    mysql.SqlQuery("SELECT `id` `value`, `name` `label` FROM `provider`");
    mysql.RunQuery(function(data) {
    	console.log(JSON.stringify(data));
    	res.send(data);
    });
    mysql.Close();
    return res;
}
