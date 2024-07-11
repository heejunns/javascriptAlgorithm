// 다항식 더하기 (예외 1x 는 x로)
function solution(polynomial) {
  let result = "";
  var answer = polynomial.split(" + ");
  console.log(answer);
  let x = 0;
  let y = 0;
  answer.forEach((item) => {
    if (!Number(item)) {
      if (item === "x") {
        x += 1;
      } else {
        x += Number(item.slice(0, -1));
      }
    } else {
      y += Number(item);
    }
  });
  console.log(x, y);
  if (x > 0 && y > 0) {
    if (x === 1) {
      result = `x + ${y}`;
    } else {
      result = `${x}x + ${y}`;
    }
  } else if (x > 0 && y === 0) {
    if (x === 1) {
      result = `x`;
    } else {
      result = `${x}x`;
    }
  } else if (x === 0 && y > 0) {
    result = `${y}`;
  } else if (x === 0 && y === 0) {
    result = "0";
  }
  return result;
}
