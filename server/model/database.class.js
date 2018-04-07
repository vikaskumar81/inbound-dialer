'use strict';
var mysql = require('mysql');
var json = require("JSON");
var HashMap = require('hashmap');

const HOST="localhost";
const USER="root";
const PASS="";
const DBASE="dialer";

var hostname='', username='', password='', database='', sqlquery;
var last_id, connection;

exports.setHostName = function (hname) {
    hostname = hname;
};

exports.setUserName = function (uname) {
    username = uname;
};

exports.setPassword = function (pass) {
    password = pass;
};

exports.setDatabase = function (dbname) {
    database = dbname;
};

exports.SqlQuery=function(sql){
    sqlquery=sql;
}

exports.last_id=function(){
    return {last: last_id};
}

exports.Open=function(){
    var dbhost, dbuser, dbpass, dbname;

    if(hostname=="")
        dbhost=HOST;
    else
        dbhost=hostname;

    if(username=="")
        dbuser=USER;
    else
        dbuser=username;

    if(password=="")
        dbpass=PASS;
    else
        dbpass=password;

    if(database=="")
        dbname=DBASE;
    else
        dbname=database;
    
    console.log('Trying to connect DB with Hostname ('+dbhost+'), Username('+dbuser+'), Password('+dbpass+'), Database ('+dbname+')');
    connection = mysql.createConnection({
        host     : dbhost,
        user     : dbuser,
        password : dbpass,
        database : dbname
    });
}

exports.Close = function(){
    connection.end();
}

exports.ModelKey=function(sql, keyfield){
    var ret = new HashMap();
    var qry=connection.query(sql);
    qry
    .on('error', function(err) {
            console.log(err);
    })
    .on('result', function(data) {
            ret.set(data[keyfield], data);
    })
    .on('end', function() {
        console.log(ret);
        return ret;
    });
}

exports.RunQueryFilter=function(filter, callback){
    console.log(filter);
    var sql = mysql.format(sqlquery+' WHERE ?', [filter]);
    console.log('SQL('+connection+') : '+sql);
    var qry=connection.query(sql, function(error, data){
        if(!error)
        {
            console.log('Data output is: '+ JSON.stringify(data));
            callback(data);
        }
        else
        {
            console.log('Error : '+error);
	        callback("Error in function");
        }
    });
}

exports.RunQuery=function(callback){
    console.log('SQL('+connection+') : '+sqlquery);
    var qry=connection.query(sqlquery, function(error, data){
        if(!error)
        {
            callback(data);
        }
        else
        {
            console.log('Error : '+error+', SQL : '+sqlquery);
	        callback('{"error":"400", "message":"Error in data Loading"}');
        }
    });
}

exports.Detail=function(col, table, filter, callback){
    var sql = mysql.format('SELECT ?? FROM ?? WHERE ?', [col, table, filter]);
    var qry=connection.query(sql, function(error, data){
        if(!error)
        {
            callback(data);
        }
        else
        {
            console.log('Error : '+error);
	        callback('{"error":"400", "message":"Error in data loading"}');
        }
    });
}

exports.GetList=function(col, table, callback){
    var sql = mysql.format('SELECT ?? FROM ??', [col, table]);
    var qry=connection.query(sql, function(error, data){
        if(!error)
        {
            callback(data);
        }
        else
        {
            console.log('Error : '+error);
	        callback('{"error":"400", "message":"Error in data loading"}');
        }
    });
}

exports.Remove=function(id, table, callback){
    var sql = mysql.format('DELETE FROM ?? WHERE ?', [table, id]);
    connection.query(sql, function (error, rows) {
        if (!error)
        {
			callback('{"error":"200", "message":"'+rows.affectedRows+'", "id":"'+id+'"}');
        }
        else
        {
            console.log('Error : ', sql);
            callback('{"error":"400", "message":"Error in data delete"}');
        }
        });
}

exports.Update=function(data, table, condition, callback){
    var sql = mysql.format('UPDATE ?? SET ? WHERE ?', [table, data, condition]);
    connection.query(sql, function (error, rows) {
        // error will be an Error if one occurred during the query
        if (!error)
        {
            callback('{"error":"200", "message":"Updated data successfully"}');
        }
        else
            console.log('Error : '+sql);
            callback('{"error":"400", "message":"Error in data update"}');
        });
}

exports.AddNew=function(table, data, callback){
    var sql = mysql.format("INSERT INTO ?? SET ?", [table, data]);
    connection.query(sql, function (error, rows) {
        // error will be an Error if one occurred during the query
        if (!error)
        {
            last_id=rows.insertId;
			callback('{"error":"200", "message":"Added data successfully", "id":"'+last_id+'"}');
        }
        else
            console.log('Error : '+sql);
            callback('{"error":"400", "message":"Error in data add"}');
        });
}		
