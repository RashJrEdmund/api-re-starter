import http, { IncomingMessage, ServerResponse } from "http";

export default async (server: ReturnType<typeof http.createServer>) => {
  server.on("request", (req: IncomingMessage, res: ServerResponse<IncomingMessage>) => {
    console.log("\nNEW INCOMING REQUEST\n");

    // console.log(req.headers);
  });
};
