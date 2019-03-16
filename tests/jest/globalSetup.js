const server = require("../../src/app");

module.exports = async () => {
  global.httpServer = await server.listen("4000");
};
