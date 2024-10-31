// 7번 문제: Multiplication.js

const fs = require("fs");
let [A, B, C] = fs
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split(" ")
  .map(BigInt);

function pow(x, y) {
  if (y == 0) {
    return BigInt(1);
  } else {
    const temp = pow(x, BigInt(parseInt(y / BigInt(2))));
    if (y % BigInt(2) == 0) {
      return (temp * temp) % C;
    } else {
      return (temp * temp * x) % C;
    }
  }
}

console.log(parseInt(pow(A, B)));
