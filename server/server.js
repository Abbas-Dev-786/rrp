require("dotenv").config({ path: "./config.env" });

const { Server } = require("socket.io");
const http = require("http");
const app = require("./app");
const { SocketServer } = require("./socket");

const httpServer = http.createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:5173",
  },
});

SocketServer(io);

const port = process.env.PORT;
httpServer.listen(port, () => {
  console.log("listening on port:", port);
});
