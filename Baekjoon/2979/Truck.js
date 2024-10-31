// 3번 문제: Truck.js

const fs = require("fs");
// const input1 = fs
//   .readFileSync("ex1.txt")
//   .toString()
//   .trim()
//   .split("\n")
//   .map((i) => i.split(" ").map(Number));
const input2 = fs
  .readFileSync("ex2.txt")
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

const [A, B, C] = input2.shift();

let time = new Array(101).fill(0);
let answer = 0;
input2.forEach((i) => {
  const [start, end] = i;
  for (let x = start; x < end; x++) {
    time[x]++;
  }
});

time.forEach((i) => {
  switch (i) {
    case 1:
      answer += A;
      break;
    case 2:
      answer += B * 2;
      break;
    case 3:
      answer += C * 3;
      break;
  }
});

console.log(answer);
