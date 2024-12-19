// 7번 문제: 막대기(stick.js)
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

const solve = (input) => {
  let target = +input;
  let cnt = 0;
  while (target > 0) {
    if (target & 1) {
      cnt++;
    }
    target >>= 1;
  }
  console.log(cnt);
};

solve(input);
