// 선택 정렬
let data = [5, 3, 4, 1, 2, 20, 21, 102, 6, 51, 92, 35];

const selectSortFunc = (arr) => {
  for (let i = 0; i < arr.length; ++i) {
    let currentMin = arr[i];
    let currentMinIndex = i;
    for (let j = i + 1; j < arr.length; ++j) {
      if (currentMin > arr[j]) {
        currentMin = arr[j];
        currentMinIndex = j;
      }
    }
    if (arr[i] !== currentMin) {
      let temp = arr[i];
      arr[i] = currentMin;
      arr[currentMinIndex] = temp;
    }
  }
  return arr;
};

// console.log("선택 정렬", selectSortFunc(data));

const select = (arr) => {
  let minIndex;
  let minValue;
  for (let i = 0; i < arr.length; ++i) {
    minIndex = i;
    minValue = arr[i];
    for (let j = i + 1; j < arr.length; ++j) {
      if (minValue > arr[j]) {
        minIndex = j;
        minValue = arr[j];
      }
    }
    if (minIndex !== i) {
      let come = arr[i];
      arr[i] = minValue;
      arr[minIndex] = come;
    }
  }
  return arr;
};

console.log(select(data));
