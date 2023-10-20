const fs = require("fs");
const input = fs
  .readFileSync("sort.txt")
  .toString()
  .trim()
  .split("\n")
  .map((item) => Number(item));

const arr = [];
for (let i = 1; i < input.length; ++i) {
  if (!arr.includes(input[i])) {
    arr.push(input[i]);
  }
}
const sortFunc = (arr) => {
  let swap;
  for (let i = arr.length; i > 0; --i) {
    swap = false;
    for (let j = 0; j < i - 1; ++j) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swap = true;
      }
    }
    if (!swap) {
      break;
    }
  }
  return arr;
};

sortFunc(arr);
arr.forEach((item) => {
  console.log(item);
});
