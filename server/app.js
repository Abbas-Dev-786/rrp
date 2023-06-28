const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({ origin: "https://rrp-amb.netlify.app/" }));

app.get("/", (req, res) => {
  res.status(200).end();
});

module.exports = app;
