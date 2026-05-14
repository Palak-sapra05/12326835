const express = require("express");

const router = express.Router();

const {
  createNotification,
  getNotifications,
  deleteNotification,
} = require("../controllers/notificationController");

router.post("/", createNotification);

router.get("/", getNotifications);

router.delete("/:id", deleteNotification);

module.exports = router;