/// <reference path="../typings/node/node.d.ts"/>
var fs = require('fs');
var server = require('http').createServer(function(request,response){
	var str = fs.createReadStream(process.argv[3]);
	str.pipe(response);
});
server.listen(Number(process.argv[2]));