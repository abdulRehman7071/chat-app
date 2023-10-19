const express = require("express");

const { createChat, userChats, findChat } = require("../controllers/chat");

const router = express.Router();

router.post("/", createChat);
router.get("/:id", userChats);
router.get("/:firstId/:secondId", findChat);

module.exports = router;
