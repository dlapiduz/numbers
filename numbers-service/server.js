var express = require('express');
var basicAuth = require('basic-auth-connect');
var app = express();

app.get('/v2/catalog', function (req, res) {
  var catalog = {
    services: [{
      id: "05c03385-1f7f-48f6-ae39-d131a517da33",
      name: "numbers",
      description: "Get a phone number!",
      bindable: true,
      plans: [{
        id: "b178182f-4f87-47af-9a0a-7b036080792e",
        name: "default",
        description: "The default plan: get 1 number"
      }]
    }]
  }

  res.send(JSON.stringify(catalog));
});


var port = process.env.PORT;
var username = process.env.APP_USER;
var password = process.env.APP_PASS;
app.use(basicAuth(username, password));

var server = app.listen(port, function () {
  var host = server.address().address;

  console.log('Example app listening at http://%s:%s', host, port);
});
