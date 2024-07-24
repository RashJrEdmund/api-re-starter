import http from "node:http";
import { CRON_TIME, PORT } from "./config";
import { Server } from "./server";
import { cronFunction } from "./lib";
import cron from "node-cron";

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");

  res.writeHead(200, {
    "Content-Type": "application/json",
    "x-author": "Orashus (Rash)",
    "x-author-github": "https://github.com/rashjredmund",
  });

  // if (req.method === "GET") {
  //   console.log("IN GET METHOD");
  // }

  return res.end("🚀 SERVER HEALTHY 🚀");
});

Server(server)
  .then(() => {
    server.listen(PORT, () => {
      console.log(`\nserver running on port: ${PORT}\n`);

      console.log({ CRON_TIME });

      cron.schedule(CRON_TIME, cronFunction);
    });
  });
