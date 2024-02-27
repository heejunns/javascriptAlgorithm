// 수열과 구간 쿼리 3

function solution(arr, queries) {
  queries.forEach((item) => {
    let q = arr[item[0]];
    arr[item[0]] = arr[item[1]];
    arr[item[1]] = q;
  });
  return arr;
}
