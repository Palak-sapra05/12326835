const express = require("express");
const cors = require("cors");

const notificationRoutes = require("./routes/notificationRoutes");
const Log = require("../logging_middleware/logger");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/notifications", notificationRoutes);

app.listen(3000, async () => {
  console.log("Server running on port 3000");

  await Log(
    "backend",
    "info",
    "service",
    "Backend server started successfully"
  );
});