// 글자 이어 붙여 문자열 만들기

function solution(my_string, index_list) {
  let answer = "";
  index_list.forEach((item) => {
    answer += my_string[item];
  });
  return answer;
}
