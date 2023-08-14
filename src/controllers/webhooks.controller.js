'use strict';

const messageService = require('../services/message.service')();
const accountService = require('../services/account.service');

const webhooksController = require('express').Router();
webhooksController.post('/:businessName', async (req, res) => {
	const response = req.body.entry[0].changes[0].value;

	const phone_number = response.metadata.display_phone_number;
	const account = await accountService.getBusinessByPhoneNumber(phone_number);

	if (response.messages) {
		const recipient = response.messages[0].from;
		const message = await messageService.handlemessage(
			response.messages[0].text.body
		);
		await messageService.sendMessage(account, recipient, message);
		return res.json(message).status(200);
	}
});

webhooksController.get('/:businessName', async (req, res) => {
	const queries = JSON.stringify(req.query).split(',');
	let challenge = queries[1].split(':')[1];
	challenge = challenge.replaceAll('"', '');
	return res.end(challenge).status(200);
});

module.exports = webhooksController;
