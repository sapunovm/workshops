module.exports = function fileIOModule(dirPath, fileExt, callback){
	var fs = require('fs');
	var path = require('path');

	fs.readdir(dirPath, function getDirFiles(err, list) {
		if(err){
			//console.log("Error:"+err);
			if(callback)
			{
				callback(err);
			}
			return;
		}
		var files = [];
		for (var index = 0; index < list.length; index++) {
			var file = list[index];
			var isFileNeedDisplay = path.extname(file) == '.'+fileExt;
			if(isFileNeedDisplay)
			{
				//console.log(file);
				files.push(file);			
			}
		}
		if(callback)
		{
			callback(null, files);
		}
	});	
};


