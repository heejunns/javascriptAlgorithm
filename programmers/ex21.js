// 소인수분해
function solution(n) {
  var answer = [];
  let x = 2;
  let number = n;
  while (number !== 1) {
    if (number % x === 0) {
      number = number / x;
      if (!answer.includes(x)) {
        answer.push(x);
      }
    } else {
      x += 1;
    }
  }
  return answer;
}
