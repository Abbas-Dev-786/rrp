import { io } from "socket.io-client";

// const URL =
const URL = import.meta.env.PROD
  ? "https://rock-paper-scissor-ph4d.onrender.com"
  : "http://localhost:8000";

export const socket = io(URL, {
  autoConnect: false,
});
