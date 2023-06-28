const express = require("express");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: "*",
    allowedHeaders: "*",
  })
);

app.get("/", (req, res) => {
  res.status(200).end();
});

module.exports = app;
