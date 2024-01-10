const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const userSchema = require("../models/user");

const userController = {
  async register(req, res) {
    try {
      const { userName, password } = req.body;

      if (userName.length < 4) {
        return res.json({
          validationError: "UserName should be at least 4 characters long",
        });
      }

      const existingUser = await userSchema.findOne({ userName });

      if (existingUser) {
        return res.json({ validationError: "Username already exists" });
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      const newUser = await userSchema.create({
        userName,
        password: hashedPassword,
      });

      res.json({
        userName,
        message: "Account Created Successfully, Please Login",
      });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  async login(req, res) {
    try {
      const { userName, password } = req.body;

      const user = await userSchema.findOne({ userName });

      if (!user) {
        return res.json({ validationError: "No User Found" });
      }

      const isMatch = bcrypt.compareSync(password, user.password);

      if (!isMatch) {
        return res.json({ validationError: "Password Incorrect" });
      }

      const token = jwt.sign(
        { userId: user._id, userName },
        process.env.JWT_SECRET
      );

      res.cookie("chatApp", token);
      res.status(200).json({ message: "Logged In Successfully", token, user });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  async getProfile(req, res) {
    try {
      const { id } = req.params;
      // const token = req.Cookie;
      // console.log("🚀 ~ file: user.js:29 ~ token:", token);
      // const decoded = await jwt.verify(token, process.env.JWT_SECRET);
      const user = await userSchema.findById(id);
      console.log("🚀 ~ file: user.js:31 ~ user:", user);
      res.json({ user });
    } catch (error) {
      res.json({ error });
    }
  },

  async getAllUser(req, res) {
    try {
      const user = await userSchema.find({}, { userName: 1 });

      res.json({ user });
    } catch (error) {
      res.json({ error });
    }
  },
};

module.exports = userController;
