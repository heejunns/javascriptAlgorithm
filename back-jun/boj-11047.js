let input = require("fs").readFileSync("ex.txt").toString().split("\n");
const [n, k] = input[0].split(" ").map((item) => +item);

input = input.slice(1).map((item) => +item);

input.reverse();
let count = 0;

let ka = k;

for (let i = 0; i < n; ++i) {
  if (ka < input[i]) {
    continue;
  } else {
    count += Math.floor(ka / input[i]);
    ka = ka % input[i];
  }
}
console.log(count);
