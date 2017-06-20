var http = require('http');
var express = require('express');
var app = require('../app');
var server = http.createServer(app);

server.listen(80);
console.log('Server started SUCCESSFULL at '+ time());

function time(){
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();

    var norm = function(num){
        return ( (num<10)? '0'+num : num );
    }

    return (norm(hour)+':'+norm(minute)+':'+norm(second))
}

