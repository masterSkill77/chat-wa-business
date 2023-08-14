'use strict';
const axios = require('axios');
const WA_API_URL = process.env.WA_API_URL;

module.exports = () => {
	const sendMessage = async (from, to, message) => {
		const url = `${WA_API_URL}/${from.businessNumberID}/messages`;

		const WA_API_TOKEN = from.businessApi;
		const body = {
			messaging_product: 'whatsapp',
			to,
			text: { body: message },
		};
		return await axios
			.post(url, body, {
				headers: {
					Authorization: `Bearer ${WA_API_TOKEN}`,
					'Content-Type': 'application/json',
				},
			})
			.then(({ data }) => data)
			.catch((e) => {
				throw e;
			});
	};

	return { sendMessage };
};
