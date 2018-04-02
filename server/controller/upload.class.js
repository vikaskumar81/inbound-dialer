var mysql=require('../model/database.class');
var json = require('json');
var table="uploads";
var csv = require('csv');
var delay = require('delay');
var obj = csv(); 
var table2="leads";
var MyData = []; 
var fs = require('fs');
var date = require('date-and-time');
var now = new Date();
var currdate = date.format(now, 'YYYY-MM-DD HH:mm:ss');

// set the directory for the uploads to the uploaded to
var DIR = '../server/uploads/';

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
		//res.send(data);
	});
    mysql.Close();
    return res;
}
 
exports.Upload=function(req, res, next){
   
    delay(10)
            .then(() => {
                mysql.Open();  
                console.log("We are into upload function");
               console.log(req.file);        
    /** The original name of the uploaded file
        stored in the variable "originalname". **/
    var target_path = '../server/uploads/' + req.file.originalname;
    var tmp_path = req.file.path;
  
    /** A better way to copy the uploaded file. **/
    var src = fs.createReadStream(tmp_path);
    var dest = fs.createWriteStream(target_path);
    src.pipe(dest);
    src.on('end', function() { res.send('complete'); });
    src.on('error', function(err) { res.send('error'); });    
      
    var filename = req.file.originalname;    
    var last_id = '';
    
	obj.from.path(DIR+filename).to.array(function (data) {
        console.log("Reads CSV files");
        console.log(data);
		for (var index = 0; index < data.length; index++) {
			MyData.push(data[index]);
		}
		//console.log(JSON.stringify(MyData));

    });
});
    delay(100)
            .then(() => {

                    var jsondata = MyData;    
                    var lead = MyData.length;
                    var updata={
                        "filename":filename,
                        "datetime":currdate,
                        "leads":lead
                    };
                    //var user=req.body;
                var last_id = mysql.AddNew(table, updata, function(data) {
                        last_id = data;
                        //res.end(data);
                        for(var i = 0; i < lead; i++)
                    {
                        console.log("leads data : ");
                        console.log(jsondata);
                        var leaddata = {
                            "id_upload":last_id,
                            "id_campaign":req.body.data.campaign_id,
                            "phone":jsondata[i]
                        };	
                        
                        mysql.AddNew(table2, leaddata, function(data) {
                            res.send(data);
                        });
                    }
                    });
                    
                    
                });
    mysql.Close();
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


/*exports.AddNew=function(req, res){
    mysql.Open();
    var user=req.params.data;

    mysql.AddNew(table, data);
    mysql.Close();
} */
