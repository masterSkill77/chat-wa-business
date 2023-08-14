'use strict';

const accountService = require('../services/account.service');

const accountController = require('express').Router();

accountController.get('/:id', async (req, res) => {
	const businessAccount = await accountService.getBusinessById(req.params.id);
	return res.json(businessAccount);
});

accountController.post('/', async (req, res) => {
	const { businessApi, businessName, businessNumber } = req.params;
	const businessAccount = await accountService.addBusiness(
		businessName,
		businessApi,
		businessNumber
	);

	return res.json(businessAccount);
});

module.exports = accountController;