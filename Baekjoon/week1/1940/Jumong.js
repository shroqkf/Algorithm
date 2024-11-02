// 6번 문제: Jumong.js

const fs = require("fs");
let [N, M, numbers] = fs
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");
N = Number(N);
M = Number(M);

numbers = numbers.trim().split(" ").map(Number);

let start = 0;
let end = 1;
let count = 0;

for (let i = start; i < numbers.length; i++) {
  end = i + 1;
  if (numbers[i] === 0) continue;
  while (true) {
    if (end >= numbers.length) break;
    if (numbers[end] !== 0) {
      if (numbers[i] + numbers[end] === M) {
        numbers[i] = 0;
        numbers[end] = 0;
        count++;
        break;
      }
    }
    end++;
  }
}

console.log(count);