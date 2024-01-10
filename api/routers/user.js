const express = require("express");
const router = express.Router();

const userController = require("../controllers/user");

router.post("/user/register", userController.register);
router.get("/user/profile/:id", userController.getProfile);
router.post("/user/login", userController.login);
router.get("/user/all", userController.getAllUser);

module.exports = router;
