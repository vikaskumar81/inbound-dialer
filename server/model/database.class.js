'use strict';
var mysql = require('mysql');
var json = require("JSON");
var HashMap = require('hashmap');

const HOST="localhost";
const USER="root";
const PASS="";
const DBASE="nexibell";

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

exports.RunQuery=function(){
    console.log('SQL('+connection+') : '+sqlquery);
    var qry=connection.query(sqlquery, function(error, data){
        if(!error)
        {
            console.log('Data output is: '+ JSON.stringify(data));
            return data;
        }
        else
        {
            console.log('Error : '+error);
        }
    });
}

exports.GetList=function(col, table){
    console.log('Columns '+ col+", Table "+table);
    var sql = mysql.format('SELECT ?? FROM ??', [col, table]);
    console.log('SQL('+connection+') : '+sql);
    var qry=connection.query(sql, function(error, data){
        if(!error)
        {
            console.log('Data output is: '+ JSON.stringify(data));
            return data;
        }
        else
        {
            console.log('Error : '+error);
        }
    });
}

exports.Remove=function(id, table){
    var sql = mysql.format('DELETE FROM ?? WHERE ?', [table, id]);
    console.log('SQL (Remove) : '+sql);
    connection.query(sql, function (error, rows) {
        if (!error)
        {
            console.log('Data output is: ', rows.affectedRows);
            return rows.affectedRows;
        }
        else
            console.log('Error : ', sql);
        });
}

exports.Update=function(data, table, condition){
    var sql = mysql.format('UPDATE ?? SET ? WHERE ?', [table, data, condition]);
    connection.query(sql, function (error, rows) {
        // error will be an Error if one occurred during the query
        if (!error)
        {
            console.log('Data output is: '+ rows);
            return rows;
        }
        else
            console.log('Error : '+sql);
        });
}

exports.AddNew=function(table, data){
    var sql = mysql.format("INSERT INTO ?? SET ?", [table, data]);
    connection.query(sql, function (error, rows) {
        // error will be an Error if one occurred during the query
        if (!error)
        {
            console.log('Data output is: ', rows.insertId);
            last_id=rows.insertId;
            return rows.insertId;
        }
        else
            console.log('Error : '+sql);
        });
}