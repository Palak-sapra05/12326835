const axios = require("axios");

const Log = async (stack, level, packageName, message) => {
  try {
    await axios.post(
      "http://4.224.186.213/evaluation-service/logs",
      {
        stack,
        level,
        package: packageName,
        message,
      }
    );
  } catch (err) {}
};

module.exports = Log;