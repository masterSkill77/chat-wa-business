const Account = require('../entities/Account.entity');

const addBusiness = async (
	businessName,
	businessApi,
	businessNumberID,
	businessPhoneNumber
) => {
	return await Account.create({
		businessApi,
		businessName,
		businessNumberID,
		businessPhoneNumber,
	});
};

const getBusinessById = async (businessId) => {
	return await Account.findOne({
		where: {
			id: businessId,
		},
	}).then((data) => data);
};

const getBusinessByPhoneNumber = async (businessPhoneNumber) => {
	return await Account.findOne({
		where: {
			businessPhoneNumber,
		},
	}).then((data) => data);
};

module.exports = { addBusiness, getBusinessById, getBusinessByPhoneNumber };
