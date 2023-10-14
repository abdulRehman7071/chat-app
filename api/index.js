const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");


const userRouter = require("./routers/user");
const userModel = require("./models/user");

app.use(cors());
dotenv.config();
app.use(express.json());
// user routes
app.use(userRouter);
app.use(cookieParser());

// db.connect

mongoose.connect(process.env.MONGO_URL);

app.get("/", (req, res) => {
  res.json("Hello World");
});

const PORT = process.env.PORT || 4040;
app.listen(PORT, () => {
  console.log(`Server started at port ${PORT} `);
});
