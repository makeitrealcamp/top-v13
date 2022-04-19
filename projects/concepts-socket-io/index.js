const express = require("express");
const cors = require("cors");
const http = require("http");

const app = express();
app.use(cors());
const server = http.createServer(app);

// Create a server socket
//const { Server } = require("socket.io");
//const io = new Server(server);

const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

/*
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});*/

io.on("connection", (socket) => {
  console.log("A user connected!");

  socket.broadcast.emit("Helloooooo");

  socket.on("disconnect", () => {
    console.log("disconnected....");
  });

  socket.on("chat message", (msg) => {
    console.log("chat message.....", msg);
    io.emit("chat message", msg);
  });

  socket.on("message", ({ name, message }) => {
    console.log("message.....", { name, message });
    io.emit("message", { name, message });
  });
});

server.listen(3005, () => {
  console.log("Server listening on port 3005...");
});
