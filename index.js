const axios = require("axios");
const Log = require("./logger");

const API_URL =
  "http://4.224.186.213/evaluation-service/notifications";

const weights = {
  Placement: 3,
  Result: 2,
  Event: 1,
};

async function main() {
  try {
    await Log(
      "backend",
      "info",
      "notification-service",
      "Fetching notifications"
    );

    const response = await axios.get(API_URL);

    const notifications = response.data.notifications;

    await Log(
      "backend",
      "info",
      "notification-service",
      "Notifications fetched successfully"
    );

    const processed = notifications.map((n) => {
      const score =
        weights[n.Type] * 1000000000 +
        new Date(n.Timestamp).getTime();

      return {
        ...n,
        score,
      };
    });

    processed.sort((a, b) => b.score - a.score);

    const top10 = processed.slice(0, 10);

    await Log(
      "backend",
      "info",
      "notification-service",
      "Top 10 notifications generated"
    );

    top10.forEach((n, index) => {
      console.log(
        `${index + 1}. ${n.Type} - ${n.Message}`
      );
    });
  } catch (error) {
    await Log(
      "backend",
      "error",
      "notification-service",
      "Error occurred"
    );
  }
}

main();