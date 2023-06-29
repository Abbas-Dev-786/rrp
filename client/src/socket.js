import { io } from "socket.io-client";

// const URL =
const URL =
  import.meta.env.REACT_APP_ENV === "pro"
    ? "https://rrp-backend.onrender.com"
    : "http://localhost:8000";

console.log(import.meta.env);

export const socket = io(URL, {
  autoConnect: false,
});
