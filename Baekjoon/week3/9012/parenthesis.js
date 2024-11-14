// 4번 문제: 괄호(parenthesis.js)
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

[T, ...strings] = input;
T = Number(T);
VPS(T, strings);

function VPS(T, strings) {
  for (let i = 0; i < T; i++) {
    const string = strings[i];
    const stack = [];
    let result = "YES";

    for (let j = 0; j < string.length; j++) {
      if (string[j] === "(") stack.push(string[j]);
      else if (string[j] === ")") {
        if (!stack.pop()) {
          result = "NO";
          break;
        }
      }
    }
    if (stack.length !== 0) result = "NO";
    console.log(result);
  }
}
