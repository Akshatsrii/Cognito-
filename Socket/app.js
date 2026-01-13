import http from "http";
import { Server } from "socket.io";
import { v4 as uuid } from "uuid";
import dotenv from "dotenv";

dotenv.config();

const server = http.createServer();
const io = new Server(server, { cors: { origin: "*" } });

const waitingQueue = [];
const activePairs = new Map();

io.on("connection", (socket) => {
  socket.on("start", () => {
    if (activePairs.has(socket.id)) return;
    if (waitingQueue.includes(socket.id)) return;

    if (waitingQueue.length > 0) {
      const partner = waitingQueue.shift();
      const roomId = uuid();

      activePairs.set(socket.id, partner);
      activePairs.set(partner, socket.id);

      socket.emit("matched", { roomId });
      io.to(partner).emit("matched", { roomId });
    } else {
      waitingQueue.push(socket.id);
    }
  });

  socket.on("next", () => {
    handleLeave(socket.id);
    socket.emit("waiting");
  });

  socket.on("disconnect", () => {
    handleLeave(socket.id);
  });
});

function handleLeave(id) {
  const queueIndex = waitingQueue.indexOf(id);
  if (queueIndex !== -1) waitingQueue.splice(queueIndex, 1);

  const partner = activePairs.get(id);
  if (!partner) return;

  activePairs.delete(id);
  activePairs.delete(partner);

  io.to(partner).emit("partner-left");
}

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log("Server running on", port);
});
