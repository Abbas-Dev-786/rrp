import { io } from "socket.io-client";

// const URL =
const URL = import.meta.env.PROD
  ? "rrp-amb.up.railway.app"
  : "http://localhost:8000";

export const socket = io(URL, {
  autoConnect: false,
});
