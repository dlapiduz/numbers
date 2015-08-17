var express = require("express");
var basicAuth = require("basic-auth-connect");
var bodyParser = require('body-parser');
var app = express();

var getCatalog = require('./catalog2');

app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json

app.get("/v2/catalog", function (req, res) {

  var catalog = getCatalog();

  res.send(JSON.stringify(catalog));
});

app.put("/v2/service_instances/:id", function(req, res) {
  res.send("{}");
});

app.delete("/v2/service_instances/:id", function(req, res) {
  res.send("{}");
});

app.put("/v2/service_instances/:instance_id/service_bindings/:binding_id",
  function(req, res) {
  var sid, token, number;

  if (req.body.plan_id == 'eeb0fe81-1eba-4324-9a65-6f95c53eed94') {
    // This is the test plan... pass tests creds
    sid = process.env.TEST_SID;
    token = process.env.TEST_TOKEN;
    number = '+15005550006';
  } else {
    sid = process.env.ACCOUNT_SID;
    token = process.env.AUTH_TOKEN;
    number = process.env.TWILIO_NUMBER;
  }

  var creds = {
    credentials: {
      account_sid: sid,
      auth_token: token,
      number: number
    }
  };

  res.send(JSON.stringify(creds));
});

app.delete("/v2/service_instances/:instance_id/service_bindings/:binding_id",
  function(req, res) {

  res.send("{}");
});

var port = process.env.PORT;
var username = process.env.APP_USER;
var password = process.env.APP_PASS;

app.use(basicAuth(username, password)); // add basic auth

var server = app.listen(port, function () {
  var host = server.address().address;

  console.log("Service app listening at http://%s:%s", host, port);
});
