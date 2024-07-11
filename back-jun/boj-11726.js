const [n] = require("fs")
  .readFileSync("ex.txt")
  .toString()
  .trim()
  .split("")
  .map((item) => +item);

const re = [0, 1, 2];

for (let i = 3; i < n + 1; ++i) {
  re.push(re[i - 1] + re[i - 2]);
}

console.log(re[n] % 10007);
