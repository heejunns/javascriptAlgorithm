// 2의 영역
function solution(arr) {
  var answer = [];
  if (!arr.includes(2)) {
    return [-1];
  }
  let resultArr = [2];
  let startArr = arr.slice(arr.findIndex((item) => item === 2) + 1);

  while (startArr.findIndex((item) => item === 2) >= 0) {
    if (startArr.findIndex((item) => item === 2) === 0) {
      resultArr.push(2);
      startArr = startArr.slice(startArr.findIndex((item) => item === 2) + 1);
    } else {
      resultArr = resultArr.concat(
        startArr.slice(0, startArr.findIndex((item) => item === 2) + 1)
      );
      startArr = startArr.slice(startArr.findIndex((item) => item === 2) + 1);
    }
  }

  return resultArr;
}
