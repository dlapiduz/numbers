var _ = require('lodash');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var cfenv = require('cfenv')

var appEnv = cfenv.getAppEnv()

console.log();
// Load env variables
var numbersCreds = appEnv.services.numbers[0].credentials;
var destination = process.env.TO_NUMBER;

// Create Twilio client
var client = require('twilio')(numbersCreds.account_sid, numbersCreds.auth_token);


// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/', function(req,res) {
  res.render('index');
});

app.post('/', function(req,res) {
  client.sms.messages.create({
    to: destination,
    from: numbersCreds.number,
    body: req.body.name + ' is at the door.'
  }, function(error, message) {
    if (!error) {
      console.log('Success! The SID for this SMS message is:');
      console.log(message.sid);
      console.log('Message sent on:');
      console.log(message.dateCreated);
    } else {
      console.log('Oops! There was an error.');
      console.log(error);
    }
  });


  res.render('done');
});

var port = process.env.PORT;
var server = app.listen(port, function () {
  var host = server.address().address;

  console.log('Example app listening at http://%s:%s', host, port);
});
