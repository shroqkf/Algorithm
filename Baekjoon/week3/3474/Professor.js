// 1번 문제: 교수가 된 현우(Professor.js)
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [T, ...N] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

function TSP(num) {
  let count = 0;
  for (let i = 5; i <= num; i *= 5) {
    count += Math.floor(num / i);
  }
  return count;
}

let answer = "";
for (let i = 0; i < T; i++) {
  answer += TSP(N[i]) + "\n";
}

console.log(answer.trim());
