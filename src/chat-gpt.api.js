const axios = require('axios');
const OPEN_AI_URL = process.env.OPEN_AI_URL;
const messages = [];

const configuration = {
	// organization: 'org-1zKIMicMChW2FaauX2gVL8Gc',
	apiKey: process.env.OPEN_AI_API,
};

module.exports = () => {
	const header = {
		'Content-Type': 'application/json',
		Authorization: `Bearer ${configuration.apiKey}`,
	};

	const chat = async (to, newMessage) => {
		if (!messages[to]) messages[to] = [];
		const message = {
			role: 'user',
			content: newMessage,
		};
		messages[to].push(message);
		const body = {
			model: 'gpt-3.5-turbo',
			messages: messages[to],
		};
		return await axios
			.post(
				OPEN_AI_URL,
				{
					...body,
				},
				{
					headers: header,
				}
			)
			.then(({ data }) => {
				messages[to].push(data.choices[0].message);
				return data.choices[0].message.content;
			})
			.catch((e) => {
				throw e;
			});
	};

	return {
		chat,
	};
};
