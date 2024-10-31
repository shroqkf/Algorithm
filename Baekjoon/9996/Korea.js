// 5번 문제: Korea.js

const solution = (N, pattern, array) => {
  const fileName = pattern.split("*");

  return array
    .map((el) => {
      if (
        el.startsWith(fileName[0]) &&
        el.slice(fileName[0].length).endsWith(fileName[1])
      ) {
        return "DA";
      }
      return "NE";
    })
    .join("\n");
};

const [N, pattern, ...array] = require("fs")
  .readFileSync("ex2.txt")
  .toString()
  .trim()
  .split("\n");

console.log(solution(Number(N), pattern, array));
