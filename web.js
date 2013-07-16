var express = require('express');

// You need this to read files.
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
	var fn = function (e, data) {
		if(e) { console.log("Bad things have happened.")}
		else { response.send(data); }
	}

	fs.readFile(__dirname + '/index.html', 'utf8', fn);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
