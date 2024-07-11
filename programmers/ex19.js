// 간단한 논리 연산

function solution(x1, x2, x3, x4) {
  let leftResult = x1 || x2;
  let rightResult = x3 || x4;

  return leftResult && rightResult;
}
