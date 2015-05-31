/// <reference path="typings/node/node.d.ts"/>
//console.log('This is my baby steps program');
//console.log(process.argv);
var result = 0;
if (process.argv.length > 2) {
	for (var index = 2; index < process.argv.length; index++) {
		result += Number(process.argv[index]);
	}
}
console.log(""+result);
