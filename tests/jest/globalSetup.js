require("@babel/register");
require("@babel/polyfill/noConflict");
import server from "../../src/app";

export default async () => {
  global.httpServer = await server.listen("4000");
};
