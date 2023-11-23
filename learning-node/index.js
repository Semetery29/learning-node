// local module
const { a, add } = require("./local-1.js");
const { a: a2, add: add2 } = require("./local-2.js");

console.log(add2(3, 4, 6));

// built-in-modules
const path = require("path");
console.log(
  path.join(
    "/D:/Code Files/Level - 2/Programs/NodeJs/learning-node/",
    "local-1.js"
  )
);
