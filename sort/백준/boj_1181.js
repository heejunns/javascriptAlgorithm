let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let inputNumber = Number(input[0]);
let data = input.slice(1);
data.sort((a, b) => a.length - b.length);
for (let i = data.length - 1; i > 1; --i) {
  let isSwap = false;
  for (let j = 0; j < i; ++j) {
    if (data[j] > data[j + 1]) {
      let temp = data[j];
      data[j] = data[j + 1];
      data[j + 1] = temp;
    }
    if (isSwap) {
      break;
    }
  }
}
let set = new Set(data);
let result = [];
set.forEach((item) => result.push(item));
let textLen = 0;
let tempData = [];
for (let i = 0; i < result.length; ++i) {
  if (tempData.length === 0 && result[i].length !== textLen) {
    textLen = result[i].length;
    tempData.push(result[i]);
  } else if (tempData.length > 0 && result.length[i].length !== textLen) {
    textLen = result[i].length;
  }
}
console.log(result);
console.log(set);
