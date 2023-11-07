let fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((item) => Number(item));
input.sort((a, b) => a - b);
console.log(input[1]);
