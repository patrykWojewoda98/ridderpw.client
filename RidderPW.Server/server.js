const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const cors = require("cors");

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

let messages = [];

io.on("connection", (socket) => {
  console.log("a user connected");

  // Nasłuchiwanie na przychodzące wiadomości
  socket.on("message", (data) => {
    const message = { id: Date.now(), name: data.name, text: data.text };
    messages.push(message);

    // Wyświetlenie wiadomości w konsoli (opcjonalne)
    console.log(`New message from ${data.name}: ${data.text}`);

    // Wysłanie wiadomosci do wszystkich podłaczonych klientów
    io.emit("message", message);
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
