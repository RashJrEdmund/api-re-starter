import type { IncomingMessage, Server, ServerResponse } from "http";

export default async (server: Server<typeof IncomingMessage, typeof ServerResponse>) => {
  server.on("request", (req: IncomingMessage, res: ServerResponse<IncomingMessage>) => {
    console.log("\nNEW INCOMING REQUEST\n");

    // console.log(req.headers);
  });
};
