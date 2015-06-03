/// <reference path="../typings/node/node.d.ts"/>
var server = require('net').createServer(function(socket){
	var dateNow = new Date();
	var strDate=dateNow.getFullYear()+'-0'+(dateNow.getMonth()+1)+'-0'+dateNow.getDay()+' '+dateNow.getHours()+':'+dateNow.getMinutes()+'\n';
	socket.end(strDate);
});
server.listen(Number(process.argv[2]));