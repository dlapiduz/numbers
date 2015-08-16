var express = require("express");
var basicAuth = require("basic-auth-connect");
var app = express();

var getCatalog = require('./catalog');

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

  var sid = process.env.ACCOUNT_SID;
  var token = process.env.AUTH_TOKEN;
  var number = process.env.TWILIO_NUMBER;

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
app.use(basicAuth(username, password));

var server = app.listen(port, function () {
  var host = server.address().address;

  console.log("Service app listening at http://%s:%s", host, port);
});
