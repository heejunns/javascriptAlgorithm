// 퀵정렬로 풀어보기

const fs = require("fs");
const input = fs
  .readFileSync("sort.txt")
  .toString()
  .trim()
  .split("\n")
  .map((item) => parseInt(item));
input.shift();

const quickSortFunc = (arr) => {
  if (arr.length <= 1) return arr;

  const pivot = arr[0];
  let leftArr = [];
  let rightArr = [];
  for (let i = 1; i < arr.length; ++i) {
    if (arr[i] <= pivot) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }
  const left = quickSortFunc(leftArr);
  const right = quickSortFunc(rightArr);

  return [...left, pivot, ...right];
};

console.log(quickSortFunc(input).join("\n"));
