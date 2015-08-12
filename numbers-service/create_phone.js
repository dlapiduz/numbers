var _ = require('lodash');

function CreatePhone(accountSid, authToken) {
  var client = require('twilio')(accountSid, authToken);

  client.availablePhoneNumbers("US").local.list({ areaCode: "512" }, function(err, numbers) {
    _.forEach(numbers.available_phone_numbers, function(n) {
      console.log(n.phone_number);
    })
  });
}

var accountSid = process.env.TWILIO_SID;
var authToken = process.env.TWILIO_TOKEN;

CreatePhone(accountSid, authToken);
