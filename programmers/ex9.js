// n 의 배수

function solution(num, n) {
  let result = 1;
  if (num % n !== 0) {
    result = 0;
  }
  return result;
}
