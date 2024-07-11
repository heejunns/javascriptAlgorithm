// 성공
const [[n, m, k], ...input] = require("fs")
  ?.readFileSync("ex.txt")
  ?.toString()
  ?.trim()
  .split("\n")
  .map((item) => item.split(" ").map((item) => +item));

const maps = Array?.from({ length: n }, () =>
  Array?.from({ length: m }, () => 0)
);
input?.forEach((item) => {
  maps[item[0] - 1][item[1] - 1] = 1;
});
const check = Array?.from({ length: n }, () =>
  Array?.from({ length: m }, () => false)
);
let total = 0;
let result = 0;
let nx = "";
let ny = "";
const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];
const bfs = (x, y) => {
  const q = [[x, y]];
  while (q.length > 0) {
    const [ex, ey] = q.shift();
    for (let i = 0; i < 4; ++i) {
      nx = ex + dx[i];
      ny = ey + dy[i];
      if (0 <= nx && nx < n && 0 <= ny && ny < m) {
        if (maps[nx][ny] === 1 && check[nx][ny] === false) {
          result += 1;
          check[nx][ny] = true;
          q.push([nx, ny]);
        }
      }
    }
  }
};
for (let i = 0; i < n; ++i) {
  for (let j = 0; j < m; ++j) {
    if (maps[i][j] === 1 && check[i][j] === false) {
      check[i][j] = true;
      result = 1;
      bfs(i, j);
      total = total < result ? result : total;
    }
  }
}

console.log(total);
