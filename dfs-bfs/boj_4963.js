const fs = require("fs");
const input = fs
  .readFileSync("sort.txt")
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.split(" ").map((item) => +item));

console.log(input);
