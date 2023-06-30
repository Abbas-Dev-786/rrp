import { useState } from "react";
import { Outlet, useParams, useNavigate } from "react-router-dom";

import { socket } from "../socket";

const CreateRoom = () => {
  const [room, setRoom] = useState();

  const { roomid } = useParams();
  const navigate = useNavigate();

  const handleFormSubmitCreateRoom = (e) => {
    e.preventDefault();
    const roomID = `room${room}`;

    socket.connect();
    socket.emit("check-room", roomID);

    socket.on("room:status", (status) => {
      status ? alert("Room Already Exists") : navigate(`room/${roomID}`);
    });
  };

  const handleFormSubmitJoinRoom = (e) => {
    e.preventDefault();
    const roomID = `room${room}`;

    socket.connect();
    socket.emit("check-room", roomID);

    socket.on("room:status", (status) => {
      status ? navigate(`room/${roomID}`) : alert("Room Does not Exists");
    });
  };

  if (roomid) {
    return <Outlet />;
  }

  return (
    <div className="stranger">
      <form onSubmit={handleFormSubmitCreateRoom}>
        <h2>Create Room</h2>
        <input
          type="number"
          min={0}
          max={100000}
          placeholder="Create Room Code"
          onChange={(e) => setRoom(e.target.value)}
        />
        <button>create room</button>
      </form>
      <form onSubmit={handleFormSubmitJoinRoom}>
        <h2>Join Room</h2>
        <input
          type="number"
          min={0}
          max={100000}
          placeholder="Enter Room Code"
          onChange={(e) => setRoom(e.target.value)}
        />
        <button>Join room</button>
      </form>
    </div>
  );
};

export default CreateRoom;
