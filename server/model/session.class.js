'use strict';

var data =[];

exports.SetField=function(key, value)
{
    str="{"+key+":"+value+"}";
    data.push(str);
}