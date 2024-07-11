let input = require("fs").readFileSync("ex.txt").toString().split("\n");

const [n, m] = input[0].split(" ");

input = input.slice(1).map((item) => item.split(""));
const check = Array.from({ length: n }, () =>
  Array.from({ length: m }, () => false)
);
const checka = Array.from({ length: n }, () =>
  Array.from({ length: m }, () => false)
);

const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];
let re;
let nx;
let ny;
const dfs = (x, y) => {
  re += 1;
  for (let i = 0; i < 4; ++i) {
    nx = x + dx[i];
    ny = y + dy[i];
    if (0 <= nx && nx < n && 0 <= ny && ny < m) {
      if (!remember.includes(input[nx][ny]) && check[nx][ny] === false) {
        remember.push(input[nx][ny]);
        check[nx][ny] = true;
        dfs(nx, ny);
      }
    }
  }
};
const dfsa = (x, y) => {
  re += 1;
  for (let i = 0; i < 4; ++i) {
    nx = x + dx[i];
    ny = y + dy[i];
    if (0 <= nx && nx < n && 0 <= ny && ny < m) {
      if (!remembera.includes(input[nx][ny]) && checka[nx][ny] === false) {
        remembera.push(input[nx][ny]);
        checka[nx][ny] = true;
        dfsa(nx, ny);
      }
    }
  }
};
let remember = [input[0][0]];
let remembera = [input[0][0]];
check[0][0] = true;
checka[0][0] = true;

if (!remember.includes(input[1][0]) && check[1][0] === false) {
  remember.push(input[1][0]);
  re = 1;
  check[1][0] = true;
  dfs(1, 0);
}

if (!remembera.includes(input[0][1]) && checka[0][1] === false) {
  remembera.push(input[0][1]);
  re = 1;
  checka[0][1] = true;
  dfsa(0, 1);
}

console.log(
  remember.length > remembera.length ? remember.length : remembera.length
);
