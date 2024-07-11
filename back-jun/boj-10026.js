let input = require("fs").readFileSync("ex.txt").toString().split("\n");

const n = parseInt(input[0]);

input = input.slice(1).map((item) => item.split(""));
const check = Array.from({ length: n }, () =>
  Array.from({ length: n }, () => false)
);
const acheck = Array.from({ length: n }, () =>
  Array.from({ length: n }, () => false)
);

// 모두 방문해야하고 dfs 로 풀어야함 한번 방문했을때 영역을 찾아야함

// 영역을 어떻게 찾냐 먼저 하나씩 돌다가 방문하지 않았다면 dfs 호출하고 dfs 에서 위아래 돌아다니다가 같은 알파벳이면 갯수세기

const dx = [1, 0, -1, 0];

const dy = [0, 1, 0, -1];

let re = 0;
let res = 0;
let nx;
let ny;
const dfs = (x, y) => {
  re += 1;
  for (let i = 0; i < 4; ++i) {
    nx = x + dx[i];
    ny = y + dy[i];
    if (0 <= nx && nx < n && 0 <= ny && ny < n) {
      if (input[nx][ny] === input[x][y] && check[nx][ny] === false) {
        check[nx][ny] = true;
        dfs(nx, ny);
      }
    }
  }
};
const adfs = (x, y) => {
  res += 1;
  for (let i = 0; i < 4; ++i) {
    nx = x + dx[i];
    ny = y + dy[i];
    if (0 <= nx && nx < n && 0 <= ny && ny < n) {
      if (input[x][y] === "R" || input[x][y] === "G") {
        if (
          (input[nx][ny] === "R" || input[nx][ny] === "G") &&
          acheck[nx][ny] === false
        ) {
          acheck[nx][ny] = true;
          adfs(nx, ny);
        }
      } else if (input[nx][ny] === input[x][y] && acheck[nx][ny] === false) {
        acheck[nx][ny] = true;
        adfs(nx, ny);
      }
    }
  }
};
const result = [];
const aresult = [];
for (let i = 0; i < n; ++i) {
  for (let j = 0; j < n; ++j) {
    if (check[i][j] === false) {
      check[i][j] = true;
      re = 0;
      dfs(i, j);
      result.push(re);
    }
  }
}
for (let i = 0; i < n; ++i) {
  for (let j = 0; j < n; ++j) {
    if (acheck[i][j] === false) {
      acheck[i][j] = true;
      res = 0;
      adfs(i, j);
      aresult.push(res);
    }
  }
}

console.log(result.length, aresult.length);
