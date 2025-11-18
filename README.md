# smart-ws-server

A lightweight **WebSocket broadcast server** built for demonstrating and testing the [`smart-ws`](https://github.com/your-username/smart-ws) client library.

This backend powers:

- **Real-time group chat**
- **Heartbeat (ping/pong) responses**
- **Broadcast messaging**
- **Multi-client syncing** (open multiple browser tabs and chat instantly)
- **Demo applications**, such as the React app in `smart-ws-demo`

It uses Node.js and the `ws` library and is intentionally small, readable, and easy to extend.

---

## 🔗 Related Projects

- **WebSocket Client Library (smart-ws)**  
  https://github.com/your-username/smart-ws *(placeholder)*

- **React Demo App (smart-ws-demo)**  
  https://github.com/your-username/smart-ws-demo *(placeholder)*

---

## 📦 What This Server Does

This example WebSocket server provides:

### ✔ Broadcast Messaging  
Any message received from one client is **sent to all connected clients**.

### ✔ Heartbeat Support  
The server replies to `"ping"` messages with `"pong"` so the client’s heartbeat logic works.

### ✔ Real-Time Chat Support  
Clients can send:

```json
{ "type": "chat", "user": "Oma", "text": "Hello!" }
```

The server enriches messages with a timestamp and broadcasts them:

```javascript 
{
  "type": "chat",
  "user": "Oma",
  "text": "Hello!",
  "timestamp": 1712345678901
}
```

## ✔ Multi-Client Support

Open 2–3 browser windows and the messages sync across all of them.

## ✔ Simple & Extensible

The server is intentionally small so you can easily add:

Rooms / channels

Authentication

Message history

Rate limiting

Custom server events

## 🚀 Getting Started

1. Install Node.js dependencies

Clone this folder or create your own:

``` javascript
npm init -y
npm install ws

```

## 3. Run the server

``` javascript
node server.js
``` 

If successful, you will see:

```javascript
WebSocket server listening on ws://localhost:8080

```

## 🧪 How to Test
* With your React frontend (smart-ws-demo)

* Open 2–3 browser tabs at http://localhost:5173

* Type messages in one tab

* They instantly appear in all tabs 🎉


## 💼 Why this repo exists

* This server exists primarily to:

* Demonstrate how smart-ws works

* Provide a real backend for the React demo

* Help developers test reconnection, buffering, and heartbeat

* Serve as an educational example of WebSocket fundamentals


## 📄 License

MIT © 2025 Victor Obije# smart-ws-test-server
