let input = require("fs")
  .readFileSync("ex.txt")
  .toString()
  .split("\n")
  .map((item) => item.split("").map((item) => +item));

const [n] = input[0];
input = input.slice(1);

const check = Array.from({ length: n }, () =>
  Array.from({ length: n }, () => false)
);

const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];

let ex;
let ey;
let re = 0;
const dfs = (x, y) => {
  re += 1;
  for (let i = 0; i < 4; ++i) {
    ex = x + dx[i];
    ey = y + dy[i];
    if (0 <= ex && ex < n && 0 <= ey && ey < n) {
      if (input[ex][ey] === 1 && check[ex][ey] === false) {
        check[ex][ey] = true;
        dfs(ex, ey);
      }
    }
  }
};

const result = [];
for (let i = 0; i < n; ++i) {
  for (let j = 0; j < n; ++j) {
    if (input[i][j] === 1 && check[i][j] === false) {
      check[i][j] = true;
      re = 0;
      dfs(i, j);
      result.push(re);
    }
  }
}

result.sort((a, b) => a - b);
console.log(result.length);
result.forEach((item) => {
  console.log(item);
});
