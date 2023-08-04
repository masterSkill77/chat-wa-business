const axios = require('axios');
const OPEN_AI_URL = 'https://api.openai.com/v1/chat/completions';

const configuration = {
	// organization: 'org-1zKIMicMChW2FaauX2gVL8Gc',
	apiKey: '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',
};

module.exports = () => {
	const header = {
		'Content-Type': 'application/json',
		Authorization: `Bearer ${configuration.apiKey}`,
	};

	const chat = async (message) => {
		const body = {
			model: 'gpt-3.5-turbo',
			messages: [
				{
					role: 'user',
					content: message,
				},
			],
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
				return data.choices[0].message.content;
			});
	};

	return {
		chat,
	};
};
