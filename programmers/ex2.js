// 이어 붙인 수

function solution(num_list) {
  // 홀수
  let odd = "";
  // 짝수
  let even = "";
  num_list.forEach((item) => {
    if (item % 2 === 1) {
      odd += String(item);
    } else {
      even += String(item);
    }
  });
  return parseInt(odd) + parseInt(even);
}
