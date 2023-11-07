let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let data = input[1].split(" ").map((item) => Number(item));
data.sort((a, b) => a - b);
let total = 0;
let sum = 0;
for (let i = 0; i < data.length; ++i) {
  sum += data[i];
  total += sum;
}

console.log(total);
