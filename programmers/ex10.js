// 수 조작하기 2

function solution(numLog) {
  var answer = "";
  let value = numLog[0];
  for (let i = 1; i < numLog.length; ++i) {
    if (numLog[i] - value === 1) {
      answer += "w";
    } else if (numLog[i] - value === -1) {
      answer += "s";
    } else if (numLog[i] - value === 10) {
      answer += "d";
    } else if (numLog[i] - value === -10) {
      answer += "a";
    }
    value = numLog[i];
  }
  return answer;
}
