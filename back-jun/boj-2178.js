// 시간 복잡도 e + v
// v 10000
// e 4 * 100 * 100
// 50000

// 자료구조
// 그래프 [][]
// 방문했는지는 [][]
// bfs

let input = require("fs").readFileSync("ex.txt").toString().split("\n");
const [n, m] = input[0].split(" ");
input = input.slice(1).map((item) => item.split("").map((item) => +item));
const check = Array.from({ length: n }, () =>
  Array.from({ length: m }, () => 0)
);
const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];
let nx;
let ny;

const dfs = (x, y) => {
  check[0][0] = 1;
  const q = [[x, y]];
  while (q.length > 0) {
    const [ex, ey] = q.shift();

    for (let i = 0; i < 4; ++i) {
      nx = ex + dx[i];
      ny = ey + dy[i];
      //   console.log(nx);
      //   console.log(ny);
      if (0 <= nx && nx < n && 0 <= ny && ny < m) {
        if (input[nx][ny] === 1 && !check[nx][ny]) {
          check[nx][ny] = check[ex][ey] + 1;
          q.push([nx, ny]);
        }
      }
    }
  }
  return check[n - 1][m - 1];
};
console.log(dfs(0, 0));
