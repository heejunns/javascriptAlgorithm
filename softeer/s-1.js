const [[n, m], ...input] = require("fs")
  .readFileSync("e.txt")
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.split(" ").map((item) => +item));

let inp = input.slice(0, n);

let [x, y] = input.slice(4);
const check = Array.from({ length: n }, () =>
  Array.from({ length: n }, () => false)
);
const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];
let re = [];
let result = 0;
let rememberx;
let remembery;
let count = 0;
const dfs = (x, y) => {
  result = 0;
  const q = [[x, y]];
  while (3 > count) {
    const [ex, ey] = q.shift();
    for (let i = 0; i < 4; ++i) {
      let nx = ex + dx[i];
      let ny = ey + dy[i];
      if (0 <= nx && nx < n && 0 <= ny && ny < n) {
        if (inp[nx][ny] && check[nx][ny] === false) {
          if (result > inp[nx][ny]) {
            result = inp[nx][ny];
            rememberx = nx;
            remembery = ny;
          }
        }
      }
    }
    q.push(rememberx, remembery);
    count += 1;
    re.push(result);
  }
};
console.log(x);
dfs(x[0] - 1, x[1] - 1);
