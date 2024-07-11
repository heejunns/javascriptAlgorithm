// 최빈값 구하기
function solution(array) {
  if (array.length === 1) {
    return array[0];
  }
  let obj = {};
  for (let item of array) {
    if (Object.hasOwn(obj, item)) {
      obj[item] += 1;
    } else {
      obj[item] = 1;
    }
  }
  const objArray = Object.entries(obj);
  objArray.sort((a, b) => b[1] - a[1]);
  // 동일한 값이 여러개일때
  if (objArray.length === 1) {
    return Number(objArray[0][0]);
  }
  if (objArray[0][1] === objArray[1][1]) {
    return -1;
  } else {
    return Number(objArray[0][0]);
  }
}
