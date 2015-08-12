var express = require('express');
var app = express();

app.get("/", function(req,res) {
  res.send("Hello!");
});

var port = process.env.PORT;
var server = app.listen(port, function () {
  var host = server.address().address;

  console.log('Example app listening at http://%s:%s', host, port);
});