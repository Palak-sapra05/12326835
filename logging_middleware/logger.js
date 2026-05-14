const axios = require("axios");

const Log = async (stack, level, packageName, message) => {
  try {
    const response = await axios.post(
      "http://4.224.186.213/evaluation-service/logs",
      {
        stack,
        level,
        package: packageName,
        message,
      },
      {
        headers: {
          Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJzYXByYXBhbGFrNjlAZ21haWwuY29tIiwiZXhwIjoxNzc4NzYxNDkxLCJpYXQiOjE3Nzg3NjA1OTEsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiJhNDJlMTRlZC1iZGMyLTQxNzUtYWQ2My04MjRiNzE5ZTM1ODQiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJwYWxhayIsInN1YiI6IjViYWI4MzM2LTA3MTQtNDQ5OC04ZTdhLTFlNzBjNzc2Njk0MCJ9LCJlbWFpbCI6InNhcHJhcGFsYWs2OUBnbWFpbC5jb20iLCJuYW1lIjoicGFsYWsiLCJyb2xsTm8iOiIxMjMyNjgzNTgiLCJhY2Nlc3NDb2RlIjoiVFJ2WldxIiwiY2xpZW50SUQiOiI1YmFiODMzNi0wNzE0LTQ0OTgtOGU3YS0xZTcwYzc3NjY5NDAiLCJjbGllbnRTZWNyZXQiOiJQZE5ybm5mcUJRSGFRcUtjIn0.hQAJ58SlCxFwsuHsdRuU4sGkw0YXojz4q1NaL1P3ctw",
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Log created:", response.data);
  } catch (error) {
    console.error("Logging failed:", error.message);
  }
};

module.exports = Log;