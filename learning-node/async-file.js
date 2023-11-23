const fs = require("fs");

// reading text asynchronously

fs.readFile("./texts/read.txt", "utf-8", (err, data) => {
  if (err) {
    throw Error("Error reading text.");
  }
  // writing data asynchronously.

  fs.writeFile("./texts/read2.txt", data, "utf-8", (err)=> {
    if (err){
      throw Error("Error Writing Data.")
    }
  })
});

console.log("testing asynchronous.");