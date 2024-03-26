// 프로그래머스 등차수열의 특정한 항만 더하기

function solution(a, d, included) {
  let result = 0; // true 인 항들만 더한 값
  let value = a; // 등차수열 값
  included.forEach((item) => {
    if (item) {
      result += value;
    }
    value += d;
  });

  return result;
}
