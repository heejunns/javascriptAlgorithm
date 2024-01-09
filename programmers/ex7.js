// 주사위 게임 2
function solution(a, b, c) {
  let answer;
  if (a === b && a === c && b === c) {
    answer =
      (a + b + c) * (a ** 2 + b ** 2 + c ** 2) * (a ** 3 + b ** 3 + c ** 3);
  } else if (
    (a === b && a !== c) ||
    (b === c && a !== b) ||
    (a === c && a !== b)
  ) {
    answer = (a + b + c) * (a ** 2 + b ** 2 + c ** 2);
  } else if (a !== b && a !== c && b !== c) {
    answer = a + b + c;
  }
  return answer;
}
