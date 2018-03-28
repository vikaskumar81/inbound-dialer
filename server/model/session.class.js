'use strict';
var HashMap = require('hashmap');
var sessdata = new HashMap();
var sess = {};

exports.SetSession=function(key, field, value)
{
    if(!sessdata.has(key))
    {
        sess[field] = value;	
        sessdata.set(key, sess);
    }
    else
    {
        var data = sessdata.get(key);
        data[field] = value;
        sessdata.set(key, data);
    }
}

exports.UpdateSession=function(key, field, value)
{
    var data = sessdata.get(key);
    data[field] = value;
    sessdata.set(key, data);
}