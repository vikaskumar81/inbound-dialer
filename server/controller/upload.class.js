var mysql=require('../model/database.class');
var table="uploads";
//var csv = require('csv');
//var obj = csv(); 
var table2="leads";
var MyData = []; 
var path = '';

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
    mysql.Update(data, table, filter, function(data) {
		res.send(data);
	});
    mysql.Close();
    return res;
}
function MyCSV(Fone) {
    this.FieldOne = Fone;
}; 

/*exports.Upload=function(req, res, next){
    mysql.Open();
	var file=req.body;
	
	obj.from.path(path+file.filename+'.csv').to.array(function (data) {
		for (var index = 0; index < data.length; index++) {
			MyData.push(new MyCSV(data[index][0]));
		}
		console.log(JSON.stringify(MyData));

	});
	var updata={
        "filename":file.filename,
		"datetime":date,
		"leads":MyData.length
    };
    //var user=req.body;
    var last_id = mysql.AddNew(table, updata, function(data) {
		//res.send(data);
	});
	for(var i = 0; i < MyData.length; i++)
	{
		var leaddata = {
			"id_upload":last_id,
			"id_campaign":file.campaign_id,
			"phone":MyData[i]
		};	
		
		mysql.AddNew(table2, leaddata, function(data) {
			res.send(data);
		});
	}
    mysql.Close();
}*/

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

    mysql.AddNew(table, data);
    mysql.Close();
} 
