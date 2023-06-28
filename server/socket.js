let readyPlayerCount = 0;
const obj = {};

const addMove = (room, player, move) => {
  if (obj[room]?.moves) {
    if (!obj[room]?.moves.map((el) => el.player).includes(player)) {
      obj[room].moves.push({ player, move });
    }
  } else {
    obj[room].moves = [{ player, move }];
  }

  return obj[room].moves;
};

module.exports.SocketServer = function (io) {
  io.on("connection", (socket) => {
    let room;

    console.log(socket.handshake);

    console.log("a user connected");

    socket.on("init:stranger", () => {
      room = "room" + Math.floor(readyPlayerCount / 2);
      socket.join(room);

      obj[room] = {};

      console.log("Player ready", socket.id, room);

      readyPlayerCount++;

      io.in(room).emit("fetch", readyPlayerCount % 2 === 0 ? false : true);

      if (readyPlayerCount % 2 === 0) {
        obj[room].anchor = socket.id;
        io.in(room).emit("startGame", obj[room].anchor);
      }
    });

    socket.on("move", ({ player, move }) => {
      const moves = addMove(room, player, move);

      if (moves?.length === 2) {
        io.in(room).emit("move", moves);
        obj[room].moves = [];
      }
    });

    socket.on("disconnect", () => {
      console.log("user disconnected");
    });
  });
};
