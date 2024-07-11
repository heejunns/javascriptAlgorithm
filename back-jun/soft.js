let input = require("fs")
  .readFileSync("ex.txt")
  .toString()
  .split("\n")
  .slice(1)
  .map((item) => item.split(" ").map((item) => +item));

console.log(input);
input.forEach((item, index) => {
  console.log(`Case #${index + 1}: ${item[0] + item[1]}`);
});
