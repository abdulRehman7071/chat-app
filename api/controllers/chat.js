const chatModel = require("../models/chat");
const createChat = async (req, res) => {
  try {
    const newChat = await chatModel.create({
      members: [req.body.senderId, req.body.receiverId],
    });
    res.status(200).json(newChat);
  } catch (error) {
    res.status(500).json(error);
  }
};
const userChats = async (req, res) => {
  try {
    const chat = await chatModel.find({
      members: { $in: [req.params.id] },
    });
    res.status(200).json(chat);
    console.log("🚀 ~ file: chat.js:15 ~ chat:", chat);
  } catch (error) {
    res.status(500).json(error);
  }
};
const findChat = async (req, res) => {
  try {
    const chat = await chatModel.findOne({
      members: { $all: [req.params.firstId, req.params.secondId] },
    });
    console.log("🚀 ~ file: chat.js:28 ~ chat:", chat);
    res.status(200).json(chat);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { createChat, userChats, findChat };
