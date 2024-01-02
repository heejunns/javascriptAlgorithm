const dummyData = [6, 2, 1, 3, 10, 5];
function insertionSortFunc(dummyData) {
  if (dummyData.length < 2) {
    return dummyData;
  }
  for (let i = 1; i < dummyData.length; ++i) {
    let compareData = dummyData[i];
    for (let j = i - 1; j > 0; --j) {
      if (dummyData[j]) {
      }
    }
  }
  return dummyData;
}

console.log(insertionSortFunc(dummyData));
