//var buffer = require('Buffer');
var fs =  require('fs');
var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  //response.send('Hello World2!');
    var buff = new Buffer(32);
    var shout = new String();
    buff = fs.readFileSync("index.html");
    shout = buff.toString();
    response.send(shout);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
