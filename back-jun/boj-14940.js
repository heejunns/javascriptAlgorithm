// 풀다 말음
const [[n, m], ...input] = require("fs")
  .readFileSync("ex.txt")
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.split(" ").map((item) => +item));

const check = Array.from({ length: n }, () =>
  Array.from({ length: m }, () => 0)
);
const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];
const dfs = (x, y) => {
  check[x][y] = 0;
  const q = [[x, y]];
  while (q.length > 0) {
    const [ex, ey] = q.shift();
    for (let i = 0; i < 4; ++i) {
      let nx = ex + dx[i];
      let ny = ey + dy[i];
      if (0 <= nx && nx < n && 0 <= y && ny < m) {
        if (input[nx][ny] === 1 && check[nx][ny] === 0) {
          check[nx][ny] = check[ex][ey] + 1;
          q.push([nx, ny]);
        }
      }
    }
  }
};

dfs(0, 0);

const a = check.map((item) => item.join(" "));
a.forEach((item) => {
  console.log(item);
});
