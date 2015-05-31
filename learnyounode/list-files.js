var fs = require('fs');
var path = require('path');
//console.log(''+path.extname("readme.txt"));

fs.readdir(process.argv[2], function getDirFiles(err, list) {
	if(err===null)
	{
		for (var index = 0; index < list.length; index++) {
			var file = list[index];
			var isFileNeedDisplay = path.extname(file) == '.'+process.argv[3];
			if(isFileNeedDisplay)
			{
				console.log(file);
			}
		}
	}
});