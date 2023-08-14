const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db.config');

const Account = sequelize.define('accounts', {
	businessName: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	businessApi: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	businessNumber: {
		type: DataTypes.STRING,
		allowNull: false,
	},
});

Account.sync();

module.exports = Account;
