const Log = require("../../logging_middleware/logger");

let notifications = [];

exports.createNotification = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      await Log(
        "backend",
        "error",
        "handler",
        "Notification message missing"
      );

      return res.status(400).json({
        message: "Message is required",
      });
    }

    notifications.push({ id: Date.now(), message });

    await Log(
      "backend",
      "info",
      "controller",
      "Notification created successfully"
    );

    res.status(201).json({
      message: "Notification created",
      notifications,
    });
  } catch (error) {
    await Log(
      "backend",
      "fatal",
      "controller",
      error.message
    );

    res.status(500).json({
      message: "Server error",
    });
  }
};

exports.getNotifications = async (req, res) => {
  await Log(
    "backend",
    "info",
    "controller",
    "Fetched all notifications"
  );

  res.json(notifications);
};

exports.deleteNotification = async (req, res) => {
  const id = parseInt(req.params.id);

  notifications = notifications.filter(
    (item) => item.id !== id
  );

  await Log(
    "backend",
    "warn",
    "controller",
    `Notification deleted with id ${id}`
  );

  res.json({
    message: "Notification deleted",
  });
};