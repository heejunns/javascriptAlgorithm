let input = require("fs").readFileSync("ex.txt").toString().trim();

input = Number(input);
let count = 0;
if (input % 5 === 0) {
  count = input / 5;
} else if (input % 3 === 0) {
  count = input / 3;
} else {
  count += Math.floor(input / 5);
  input = input % 5;
  count += Math.floor(input / 3);
  input = input % 3;
  if (input > 0) {
    count = -1;
  }
}

console.log(count);
