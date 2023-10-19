const messageModel = require("../models/message");
const addMessage = async (req, res) => {
  const { chatId, senderId, text } = req.body;
  try {
    const message = await messageModel.create({
      chatId,
      senderId,
      text,
    });
    res.status(200).json(message);
  } catch (error) {
    res.status(200).json(error);
  }
};

const getMessage = async (req, res) => {
  try {
    const { id } = req.params;
    const messages = await messageModel.find({ chatId: id });
    console.log("🚀 ~ file: message.js:20 ~ messages:", messages);
    res.status(200).json(messages);
  } catch (error) {
    res.status(200).json(error);
  }
};

module.exports = { addMessage, getMessage };
