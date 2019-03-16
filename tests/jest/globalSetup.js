import server from "../../src/app";

export default async () => {
  global.httpServer = await server.listen("4000");
};
