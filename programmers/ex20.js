// 콜라츠 수열 만들기
function solution(n) {
  let answer = [n];
  let num = n;
  while (num > 1) {
    if (num % 2 === 0) {
      answer.push(num / 2);
      num = num / 2;
    } else {
      answer.push(3 * num + 1);
      num = 3 * num + 1;
    }
  }

  return answer;
}
