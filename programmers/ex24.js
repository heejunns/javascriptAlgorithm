// 정사각형으로 만들기
function solution(arr) {
  let arrLen = arr.length;
  let arrElementLen = arr[0].length;

  if (arrLen === arrElementLen) {
    return arr;
  }

  if (arrLen > arrElementLen) {
    arr.map((item) => {
      let tmpArray = item;
      for (let i = 0; i < arrLen - arrElementLen; ++i) {
        tmpArray.push(0);
      }
      return tmpArray;
    });

    return arr;
  }

  if (arrLen < arrElementLen) {
    for (let i = 0; i < arrElementLen - arrLen; ++i) {
      arr.push(new Array(arrElementLen).fill(0));
    }
    return arr;
  }
}
