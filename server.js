'use strict';

require('dotenv').config();
// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
const bodyParser = require('body-parser');
const app = require('express')();

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/message', (req, res) => {
	const whatsAppBody = req.body;

	const message = whatsAppBody.Body;
	const twiml = new MessagingResponse();
	twiml.message(message);
	res.type('text/xml').send(twiml.toString());
});

app.listen(8080, function () {
	console.log('Server listening');
});
