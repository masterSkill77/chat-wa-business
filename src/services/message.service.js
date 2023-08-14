const waBusinessApi = require('../wa-business.api')();
const ChatGPT = require('../chat-gpt.api')();

const allMessages = [];

module.exports = messageService = () => {
	const handlemessage = async (message) => {
		return message;
	};
	const chatWithGPT = async (to, message, waAccount) => {
		return await ChatGPT.chat(to, message, waAccount);
	};
	const sendMessage = async (from, to, message) => {
		const returnFromGpt = await chatWithGPT(to, message, from);
		return await waBusinessApi.sendMessage(from, to, returnFromGpt);
	};
	return {
		handlemessage,
		sendMessage,
	};
};
