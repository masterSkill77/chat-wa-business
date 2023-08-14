'use strict';

require('dotenv').config();
const bodyParser = require('body-parser');
const webhooksController = require('./src/controllers/webhooks.controller');
const app = require('express')();

app.use(bodyParser.json());

app.use('/message', webhooksController);
app.get('/verify', async (req, res) => {
	const queries = JSON.stringify(req.query).split(',');
	let challenge = queries[1].split(':')[1];
	challenge = challenge.replaceAll('"', '');
	return res.end(challenge).status(200);
});

app.listen(process.env.PORT, function () {
	console.log('Server listening');
});
