var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
	var bffr = fs.readFile(index.html);
	var str = buf.toString(bffr);
	response.send(str);  
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
