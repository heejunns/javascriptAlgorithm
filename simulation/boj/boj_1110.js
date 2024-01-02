const fs = require("fs");

let input = fs.readFileSync("sort.txt").toString().trim();

if (input.length === 1) {
  input += "0";
}

let temp;
let count = 1;

temp = (parseInt(input[1]) + parseInt(input[0])).toString();
input = input[input.length - 1] + temp[temp.length - 1];

// while (parseInt(input) !== 26) {
//   temp = (parseInt(input[0]) + parseInt(input[1])).toString();
//   input = input[input.length - 1] + temp[temp.length - 1];
//   count += 1;
// }

console.log(count);
console.log(input);
console.log("hello".length);
