var mysql=require('../model/database.class');
var table="message";
var fs = require('fs');
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
    var data= JSON.parse(req.body.data);
    var filter={
      "id":req.params.id
    };
    mysql.Update(data, table, filter, function(data) {
		//res.send(data);
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
		res.end(data);
	});
    mysql.Close();
}

exports.AddNew=function(req, res){
    mysql.Open();
    var user=JSON.parse(req.params.data);

    mysql.AddNew(table, user, function(data) {
		//res.end(data);
	});
    mysql.Close();
}

exports.Upload=function(req, res, next){
    mysql.Open();
    var msg=JSON.parse(req.params.data);
    var tmp_path = req.file.path;

    /** The original name of the uploaded file
        stored in the variable "originalname". **/
    var target_path = '../server/uploads/' + req.file.originalname;
  
    /** A better way to copy the uploaded file. **/
    var src = fs.createReadStream(tmp_path);
    var dest = fs.createWriteStream(target_path);
    src.pipe(dest);
    src.on('end', function() { res.send('complete'); });
    src.on('error', function(err) { res.send('error'); });    
    console.log("We are into upload function");
    console.log(req.file);  
    var filename = req.file.originalname;   
    var updata={
        "name":msg.name,
        "filename":filename        
    };
    var last_id = mysql.AddNew(table, updata, function(data) {
    last_id = data;
    //res.end(data);
});
    mysql.Close();
}
