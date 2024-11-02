// 1번 문제: Seven_Dwarfs.js

const fs = require("fs");
const input = fs.readFileSync("example.txt").toString().trim().split("\n");
const nums = input.map(Number).sort((a, b) => a - b);
const minus =
  nums.reduce((acc, cur) => {
    return acc + cur;
  }, 0) - 100;

let start = 0;
let end = nums.length - 1;
let minusNums = [];

while (start < end) {
  if (nums[start] + nums[end] === minus) {
    minusNums = [nums[start], nums[end]];
    break;
  } else if (nums[start] + nums[end] < minus) {
    start += 1;
  } else {
    end -= 1;
  }
}

const result = nums.filter((num) => !minusNums.includes(num));

console.log(result.join("\n"));
