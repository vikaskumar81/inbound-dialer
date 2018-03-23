'use strict';
var HashMap = require('hashmap');
//var data =[];
var obj = {};

exports.SetField=function(key, field, value)
{
    obj[field] = value;	
	HashMap.set(key, obj);
	
}