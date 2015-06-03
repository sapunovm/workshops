/// <reference path="../typings/node/node.d.ts"/>
var http = require('http');
var result = [];
var counter = 0; 
function getContent(url, index){
	http.get(url, function (response) {
		response.setEncoding('utf8');
		//var result ='';
		response.on('data', function(data){
			result[index]+=data;
		});
		response.on('error',console.error);	
		response.on('end',function(){
			counter++;
			if(counter < 3)
			{
				return;
			}		
			displayResult();
		});
	});	
}

function displayResult()
{ 
	for (var index = 0; index < result.length; index++) {
		console.log(result[index]);
	}
}
result.push("");
getContent(process.argv[2], 0);
result.push("");
getContent(process.argv[3], 1);
result.push("");
getContent(process.argv[4], 2);