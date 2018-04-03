var mysql=require('../model/database.class');
var table="campaign";

exports.List=function(req, res, next){
    mysql.Open();
    mysql.SqlQuery("SELECT `campaign`.`id`, `campaign`.`name`, `campaign`.`description`, `campaign`.`status`, IFNULL(DATE_FORMAT(FROM_UNIXTIME(`startdate`), '%Y-%m-%d'), 'N.A.') `startdate`, IFNULL(DATE_FORMAT(FROM_UNIXTIME(`enddate`), '%Y-%m-%d'), 'N.A.') `enddate`, IFNULL(CONCAT(`starthr`, ':', `startmin`),'N.A.') `starttime`, `starthr`, `startmin`, IFNULL(CONCAT(`endhr`, ':', `endmin`),'N.A.') `endtime`, `endhr`, `endmin`, IFNULL(`weekdays`,'N.A.') `weekdays`, IFNULL((SELECT `name` FROM message WHERE id=campaign.id_message),'N.A.') `filename`, `id_message`, `cid`,`ringtime`,`answertime`,`channel`,`ppm`, (SELECT `name` FROM `provider` WHERE id=campaign.`id_provider`) `provider`, `id_provider` FROM `campaign`");
    mysql.RunQuery(function(data) {
    	res.send(data);
    });
    mysql.Close();
}

exports.Detail=function(req, res){
    mysql.Open();
    var filter={
      "id":req.params.id
    };
    mysql.SqlQuery("SELECT `campaign`.`id`, `campaign`.`name`, `campaign`.`description`, `campaign`.`status`, IFNULL(DATE_FORMAT(FROM_UNIXTIME(`startdate`), '%d-%m-%Y'), 'N.A.') `startdate`, IFNULL(DATE_FORMAT(FROM_UNIXTIME(`enddate`), '%d-%m-%Y'), 'N.A.') `enddate`, IFNULL(CONCAT(`starthr`, ':', `startmin`),'N.A.') `starttime`, `starthr`, `startmin`, IFNULL(CONCAT(`endhr`, ':', `endmin`),'N.A.') `endtime`, `endhr`, `endmin`, IFNULL(`weekdays`,'N.A.') `weekdays`, IFNULL((SELECT `name` FROM message WHERE id=campaign.id_message),'N.A.') `filename`, `id_message`, `cid`,`ringtime`,`answertime`,`channel`,`ppm`, (SELECT `name` FROM `provider` WHERE id=campaign.`id_provider`) `provider`, `id_provider` FROM `campaign`");
    mysql.RunQueryFilter(filter, function(data) {
    	res.send(data);
    });
    mysql.Close();
    return res;
}

exports.Status=function(req, res){
    mysql.Open();
    var udata= JSON.parse(req.body.data);
    var filter={
      "id":req.body.id
    };
    mysql.Update(udata, table, filter, function(data) {
		res.end(data);
	});
    mysql.Close();
}

exports.Update=function(req, res){
    mysql.Open();
    var udata= JSON.parse(req.body.data);
    var filter={
      "id":req.params.id
    };
    mysql.Update(udata, table, filter, function(data) {
		//res.send(data);
	});
    mysql.Close();
}

exports.Delete=function(req, res){
    mysql.Open();
    var user={
        "id":req.params.id
    };

    mysql.Remove(user, table, function(data) {
		res.end(data);
	});
    mysql.Close();
}

exports.AddNew=function(req, res){
    mysql.Open();
    var user=JSON.parse(req.body.data);
    mysql.AddNew(table, user, function(data) {
		//res.end(data);
	});
    mysql.Close();
}