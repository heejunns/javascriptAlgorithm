// 글자 지우기
function solution(my_string, indices) {
  let answer = "";
  my_string.split("").forEach((item, index) => {
    if (!indices.includes(index)) {
      answer += item;
    }
  });

  return answer;
}
