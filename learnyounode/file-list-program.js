var myModule = require('./file-list-module');
myModule(process.argv[2],process.argv[3], function printFileList(err,files) {
	if(err)
	{
		console.log("Oops !");
	}
	files.forEach(function(file) {
		console.log(file);
	});
}); 