const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { createServer } = require("node:http");
const { Server } = require("socket.io");

const userRouter = require("./routers/user");
const chatRouter = require("./routers/chat");
const messageRoutes = require("./routers/message");

const server = createServer(app);
const io = new Server(server, {
  cookie: true,
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

app.use(cors()); // Allow all origins for simplicity; restrict in production.
dotenv.config();
app.use(express.json());
app.use(userRouter);
app.use("/chat", chatRouter);
app.use("/messages", messageRoutes);
app.use(cookieParser());

mongoose.connect(process.env.MONGO_URL);

app.get("/", (req, res) => {
  res.json("Hello World");
});

const PORT = process.env.PORT || 4040;

io.on("connection", (socket, req) => {
  console.log("a user connected", socket.id);
  socket.on("chat message", (message) => {
    // Broadcast the message to all connected clients
    io.emit("chat message", message);
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected", socket.id);
  });
});

server.listen(PORT, () => {
  console.log(`Server started at port ${PORT} `);
});
