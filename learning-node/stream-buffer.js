const http = require("http");

// creating a sever using raw node.js
const server = http.createServer();
const fs = require("fs");
const { buffer } = require("stream/consumers");

// listener
server.on("request", (req, res) => {
  if (req.ur === "/read-file" && req.method === "GET");

  // streaming file reading
  const readableStream = fs.createReadStream(process.cwd() + "/texts/read.txt");

  readableStream.on("data", (buffer) => {
    res.write(buffer);
  });

  readableStream.on("end", () => {
    res.end("Hello from World.");
  });
});

server.listen(5000, () => {
  console.log(`server is listening on port 5000`);
});
