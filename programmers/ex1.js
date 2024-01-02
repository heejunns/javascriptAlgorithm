// 조건 문자열

function solution(ineq, eq, n, m) {
  let makeStar;
  if (eq === "!") {
    makeStar = ineq;
  } else {
    makeStar = ineq + eq;
  }
  var answer = 0;
  if (makeStar === "<=") {
    if (n <= m) {
      answer = 1;
    } else {
      answer = 0;
    }
  } else if (makeStar === ">=") {
    if (n >= m) {
      answer = 1;
    } else {
      answer = 0;
    }
  } else if (makeStar === ">") {
    if (n > m) {
      answer = 1;
    } else {
      answer = 0;
    }
  } else if (makeStar === "<") {
    if (n < m) {
      answer = 1;
    } else {
      answer = 0;
    }
  }
  return answer;
}
