import { io } from "socket.io-client";

// const URL =
const URL = import.meta.env.PROD
  ? "https://rrp-backend.onrender.com"
  : "http://localhost:8000";

export const socket = io(URL, {
  autoConnect: false,
});
