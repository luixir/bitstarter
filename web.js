var express = require('express');
var fs = require('fs');
var app = express();
app.use(express.logger());
app.get('/', function(request, response) {
  var file = fs.readFileSync('index.html', 'utf-8');
  response.send(file);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
