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

exports.Campaign=function(req, res){
    mysql.Open();
    mysql.SqlQuery("SELECT `campaign`.`id`, `campaign`.`name`, `campaign`.`description`, `campaign`.`status`, IFNULL(DATE_FORMAT(FROM_UNIXTIME(`startdate`), '%Y-%m-%d'), 'N.A.') `startdate`, IFNULL(DATE_FORMAT(FROM_UNIXTIME(`enddate`), '%Y-%m-%d'), 'N.A.') `enddate`, IFNULL(CONCAT(`starthr`, ':', `startmin`),'N.A.') `starttime`, `starthr`, `startmin`, IFNULL(CONCAT(`endhr`, ':', `endmin`),'N.A.') `endtime`, `endhr`, `endmin`, IFNULL(`weekdays`,'N.A.') `weekdays`, IFNULL((SELECT `name` FROM message WHERE id=campaign.id_message),'N.A.') `filename`, `id_message`, `cid`,`ringtime`,`answertime`,`channel`,`ppm`, (SELECT `name` FROM `provider` WHERE id=campaign.`id_provider`) `provider`, `id_provider` FROM `campaign`");
    mysql.RunQuery(function(data) {
    	console.log(JSON.stringify(data));
    	res.send(data);
    });
    mysql.Close();
    return res;
}
