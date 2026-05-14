const express = require("express");
const Log = require("../logging_middleware/logger");

const app = express();

app.get("/", async (req, res) => {
  await Log(
    "backend",
    "info",
    "route",
    "Home route accessed"
  );

  res.send("Backend running");
});

app.listen(3000, async () => {
  console.log("Server started");

  await Log(
    "backend",
    "info",
    "service",
    "Backend server started"
  );
});