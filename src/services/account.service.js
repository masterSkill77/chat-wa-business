const Account = require('../entities/Account.entity');

const addBusiness = async (businessName, businessApi, businessNumber) => {
	return await Account.create({
		businessApi,
		businessName,
		businessNumber,
	});
};

const getBusinessById = async (businessId) => {
	return await Account.findOne({
		where: {
			id: businessId,
		},
	}).then((data) => data);
};

const getBusinessByPhoneNumber = async (businessNumber) => {
	return await Account.findOne({
		where: {
			businessNumber,
		},
	}).then((data) => data);
};

module.exports = { addBusiness, getBusinessById, getBusinessByPhoneNumber };
