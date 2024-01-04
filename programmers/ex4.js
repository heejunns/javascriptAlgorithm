// 수 조작하기 1

function solution(n, control) {
  let result = n;
  control.split("").forEach((item) => {
    if (item === "w") {
      result += 1;
    } else if (item === "s") {
      result -= 1;
    } else if (item === "d") {
      result += 10;
    } else if (item === "a") {
      result -= 10;
    }
  });
  return result;
}
