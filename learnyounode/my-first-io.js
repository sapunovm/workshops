/// <reference path="typings/node/node.d.ts"/>
var fs = require('fs');
var buff = fs.readFileSync(process.argv[2]);
var result = buff.toString().split('\n').length - 1;
console.log(""+result);