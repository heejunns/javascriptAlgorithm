// 수열과 구간 쿼리 4

function solution(arr, queries) {
  for (let i = 0; i < queries.length; ++i) {
    for (let j = queries[i][0]; j < queries[i][1] + 1; ++j) {
      if (j === 0) {
        arr[j] += 1;
      } else if (j % queries[i][2] === 0) {
        arr[j] += 1;
      }
    }
  }
  return arr;
}
