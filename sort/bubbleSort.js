let data = [5, 3, 4, 1, 2, 3, 21, 2, 1, 51, 2, 3];

const sortFunc = (arr) => {
  let temp;
  for (let i = arr.length; i > 0; --i) {
    let isSwap = false;
    for (let j = 0; j < i - 1; ++j) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        isSwap = true;
      }
    }
    if (!isSwap) {
      break;
    }
  }
  return arr;
};

console.log(sortFunc(data));
