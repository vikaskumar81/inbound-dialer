var mysql=require('../model/database.class');
var table="campaign";
exports.List=function(req, res, next){
    mysql.Open();
    mysql.SqlQuery("SELECT `campaign`.`id`, `campaign`.`name`, `campaign`.`description`, `campaign`.`status`, IFNULL(DATE_FORMAT(FROM_UNIXTIME(`startdate`), '%d-%m-%Y'), 'N.A.') `startdate`, IFNULL(DATE_FORMAT(FROM_UNIXTIME(`enddate`), '%d-%m-%Y'), 'N.A.') `enddate`, IFNULL(CONCAT(`starthr`, ':', `startmin`),'N.A.') `starthr`, IFNULL(CONCAT(`endhr`, ':', `endmin`),'N.A.') `endhr`, IFNULL(`weekdays`,'N.A.') `weekdays`, IFNULL((SELECT `name` FROM message WHERE id=campaign.id_message),'N.A.') `filename`, `cid`,`ringtime`,`answertime`,`channel`,`ppm`, (SELECT `name` FROM `provider` WHERE id=campaign.`id_provider`) `provider` FROM `campaign`");
    mysql.RunQuery(function(data) {
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
    mysql.SqlQuery("SELECT `campaign`.`id`, `campaign`.`name`, `campaign`.`description`, `campaign`.`status`, IFNULL(DATE_FORMAT(FROM_UNIXTIME(`startdate`), '%d-%m-%Y'), 'N.A.') `startdate`, IFNULL(DATE_FORMAT(FROM_UNIXTIME(`enddate`), '%d-%m-%Y'), 'N.A.') `enddate`, IFNULL(CONCAT(`starthr`, ':', `startmin`),'N.A.') `starthr`, IFNULL(CONCAT(`endhr`, ':', `endmin`),'N.A.') `endhr`, IFNULL(`weekdays`,'N.A.') `weekdays`, IFNULL((SELECT `name` FROM message WHERE id=campaign.id_message),'N.A.') `filename`, `cid`,`ringtime`,`answertime`,`channel`,`ppm`, (SELECT `name` FROM `provider` WHERE id=campaign.`id_provider`) `provider` FROM `campaign`");
    //var col=["id", "id_user", "id_provider", "id_message", "name", "description", "startdate", "enddate", "starthr", "startmin", "endhr", "endmin", "weekdays", "status", "cid", "ringtime", "answertime", "channel", "ppm"];
    mysql.RunQueryFilter(filter, function(data) {
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
