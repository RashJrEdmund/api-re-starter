import http from "node:http";
import { PORT } from "./config";
import { Server } from "./server";

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");

  res.writeHead(200, {
    "Content-Type": "application/json",
    "x-author": "Orashus (Rash)",
  });

  console.log({ path: req.url })

  if (req.method === "GET") {
    console.log("IN GET METHOD")
  }

  if (req.method === "POST") {
    console.log("POST GET METHOD");
  }

  return res.end("🚀 SERVER HEALTHY 🚀");
});

Server(server)
  .then(() => {
    server.listen(PORT, () => {
      console.log(`\nserver running on port: ${PORT}\n`);
    });
  });
