'use strict';

require('dotenv').config();
// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
const bodyParser = require('body-parser');
const app = require('express')();

app.use(bodyParser.json());
app.post('/message', (req, res) => {
	console.log({ request: req.body });
	return res.json({
		test: 'Working',
	});
});

app.get('/test', (req, res) => {
	return res.json({
		test: 'Working',
	});
});

app.listen(8080, function () {
	console.log('Server listening');
});

// client.messages
// 	.create({
// 		from: 'whatsapp:+14155238886',
// 		body: 'Hello, there!',
// 		to: 'whatsapp:+261346804717',
// 	})
// 	.then((message) => console.log(message.sid));
