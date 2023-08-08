'use strict';

require('dotenv').config();
const bodyParser = require('body-parser');
const webhooksController = require('./src/controllers/webhooks.controller');
const app = require('express')();

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/message', webhooksController);

app.listen(process.env.PORT, function () {
	console.log('Server listening');
});
