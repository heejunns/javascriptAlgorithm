let input = Number(require("fs").readFileSync("sort.txt").toString().trimEnd());
let count = 0;
if (input / 5) {
  count += Math.floor(input / 5);
  input %= 5;
}
console.log("음", input);
if (input / 3) {
  count += Math.floor(input / 3);
  input %= 3;
}

if (input !== 0) {
  console.log(-1);
} else {
  console.log(count);
}
