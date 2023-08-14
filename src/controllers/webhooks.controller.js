'use strict';

const messageService = require('../services/message.service')();

const webhooksController = require('express').Router();
webhooksController.post('/', async (req, res) => {
	const response = req.body.entry[0].changes[0].value;
	if (response.messages) {
		const recipient = response.messages[0].from;
		const message = await messageService.handlemessage(
			response.messages[0].text.body
		);
		await messageService.sendMessage('106442799216287', recipient, message);
		return res.json(message).status(200);
	}
});

webhooksController.get('/', async (req, res) => {
	const queries = JSON.stringify(req.query).split(',');
	let challenge = queries[1].split(':')[1];
	challenge = challenge.replaceAll('"', '');
	console.log(challenge);
	return res.end(challenge).status(200);
});

module.exports = webhooksController;
