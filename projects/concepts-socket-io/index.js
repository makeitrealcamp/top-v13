const express = require("express");
const http = require("http");

const app = express();
const server = http.createServer(app);

// Create a server socket
const { Server } = require("socket.io");
const io = new Server(server);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

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
});

server.listen(3005, () => {
  console.log("Server listening on port 3005...");
});
