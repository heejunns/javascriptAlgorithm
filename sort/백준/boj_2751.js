const fs = require("fs");
const input = fs
  .readFileSync("sort.txt")
  .toString()
  .trim()
  .split("\n")
  .map((item) => Number(item));

input.shift();

input.sort((a, b) => a - b);
console.log(input.join("\n"));
