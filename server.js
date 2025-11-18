// server.js
const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 8080 });

function broadcast(data, exceptSocket = null) {
  // Send data to every connected client
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN && client !== exceptSocket) {
      client.send(data);
    }
  });
}

wss.on("connection", (socket) => {
  console.log("Client connected");

  socket.on("message", (raw) => {
    const str = raw.toString();
    console.log("Received:", str);

    // Handle ping from heartbeat (keep this very simple)
    if (str === "ping") {
      socket.send("pong");
      return;
    }

    // Try to parse JSON from client
    let msg;
    try {
      msg = JSON.parse(str);
    } catch {
      console.log("Non-JSON message, ignoring");
      return;
    }

    // Expect a shape like { type: "chat", user, text }
    if (msg.type === "chat" && typeof msg.text === "string") {
      const enriched = {
        type: "chat",
        user: msg.user || "Anonymous",
        text: msg.text,
        timestamp: Date.now(),
      };

      // Broadcast to all clients, including sender
      const out = JSON.stringify(enriched);
      broadcast(out);
    }
  });

  socket.on("close", () => {
    console.log("Client disconnected");
  });
});

console.log("WebSocket server listening on ws://localhost:8080");
