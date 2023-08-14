const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db.config');

const Account = sequelize.define(
	'accounts',
	{
		businessName: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		businessApi: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		businessNumberID: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		businessPhoneNumber: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		timestamps: false,
	}
);

Account.sync();

module.exports = Account;
