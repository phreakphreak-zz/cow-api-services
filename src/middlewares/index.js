const morgan = require("morgan");
const middlewares = {};

middlewares.error404 = async (req, res, next) => {
  res.status(404).json({ message: "not found" });
};
middlewares.error500 = async (req, res, next) => {
  res.status(500).json({ messag: "server error internal" });
};

middlewares.httpRequest = morgan("dev");

module.exports = middlewares;
