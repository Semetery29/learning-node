const http = require("http");

// creating a sever using raw node.js
const server = http.createServer();
const fs = require("fs");
const { buffer } = require("stream/consumers");
const { error } = require("console");

// listener
server.on("request", (req, res) => {
  if (req.ur === "/read-file" && req.method === "GET");

  // streaming file reading
  const readableStream = fs.createReadStream(process.cwd() + "/texts/read.txt");

  readableStream.on("data", (buffer) => {
    res.statusCode = 200;
    res.write(buffer);
  });

  readableStream.on("end", () => {
    res.end("The Streaming is over!");
  });

  readableStream.on("error", (error) => {
    console.log(error);
    res.statusCode = 500;
    res.end("Something went Wrong.");
  });
});

server.listen(5000, () => {
  console.log(`server is listening on port 5000`);
});
