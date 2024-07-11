// 아이디어
// BFS 사용

// 시간 복잡도
// bfs 는 시간 복잡도 v + e
// v = 2500000
// e = 4 * 500 * 500
// 대충 12500000

// 자료구조
// 그래프 전체 지도 : [][]
// 방문 : [][]
// 큐 사용
// dx,dy 일때 0,1 아래, 1,0 은 오른쪽, 0,-1 아래쪽, -1,0 은 왼쪽

let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map((item) => item.split(" ").map((item) => +item));

const [n, m] = input[0];

input = input.slice(1);

let check = Array.from({ length: n }, () =>
  Array.from({ length: m }, () => false)
);
const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];
let nx = "";
let ny = "";
const dfs = (x, y) => {
  let result = 1;
  const q = [];
  q.push([x, y]);
  while (q.length > 0) {
    const [ex, ey] = q.shift();
    // 하나씩 꺼내기 q 가 없을때까지
    for (let i = 0; i < 4; ++i) {
      nx = ex + dx[i];
      ny = ey + dy[i];
      if (0 <= nx && nx < n && 0 <= ny && ny < m) {
        if (input[nx][ny] === 1 && check[nx][ny] === false) {
          result += 1;
          check[nx][ny] = true;
          q.push([nx, ny]);
        }
      }
    }
  }
  return result;
};

let count = 0; // 전체 그림 개수
let maxCount = 0;
for (let i = 0; i < n; ++i) {
  for (let j = 0; j < m; ++j) {
    if (input[i][j] === 1 && check[i][j] === false) {
      check[i][j] = true;
      count += 1;
      const result = dfs(i, j);
      maxCount = maxCount < result ? result : maxCount;
    }
  }
}

console.log(count);
console.log(maxCount);
