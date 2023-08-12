const waBusinessApi = require('../wa-business.api')();
const ChatGPT = require('../chat-gpt.api')();

const allMessages = [];

module.exports = messageService = () => {
	const handlemessage = async (message) => {
		return message;
	};
	const chatWithGPT = async (to, message) => {
		return await ChatGPT.chat(to, message);
	};
	const sendMessage = async (from, to, message) => {
		const returnFromGpt = await chatWithGPT(to, message);
		return await waBusinessApi.sendMessage(from, to, returnFromGpt);
	};
	return {
		handlemessage,
		sendMessage,
	};
};

// const MessagingResponse = require('twilio').twiml.MessagingResponse;
// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;
// const client = require('twilio')(accountSid, authToken);
// const ChatGPT = require('./src/chat-gpt');
// app.get('/message', async (req, res) => {
// 	return res.json(
// 		await waBusinessApi.sendMessage('116756568172163', '261346804717', 'hi')
// 	);
// });

// app.post('/message', async (req, res) => {
// 	const whatsAppBody = req.body;

// 	const message = whatsAppBody.Body;

// 	const response = await ChatGPT().chat(message);

// 	const twiml = new MessagingResponse();
// 	twiml.message(response);
// 	res.type('text/xml').send(twiml.toString());
// });
