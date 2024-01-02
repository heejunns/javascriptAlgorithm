const fs = require("fs");

const input = fs.readFileSync("sort.txt").toString().trim().split("\n");

console.log(input);

const result = [];

for (let i = 1; i <= Number(input[0]); ++i) {
  const arr = input[i]
    .trim()
    .split(" ")
    .map((item) => Number(item));
  const tempArr = input[i + 1]
    .trim()
    .split(" ")
    .map((item) => Number(item));
  const remember = tempArr[arr[1]];

  tempArr.sort((a, b) => a - b);

  console.log(tempArr.indexOf(remember) + 1);
}
