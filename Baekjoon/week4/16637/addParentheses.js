// 10번 문제: 괄호 추가하기(addParentheses.js)
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const N = +input[0]; 
const expression = input[1].trim();
let answer = -Infinity;

DFS(0, 0);
console.log(answer);

function DFS(idx, total) {
  if (idx > N - 1) {
    answer = Math.max(answer, total);
    return;
  }

  const preOp = idx === 0 ? "+" : expression[idx - 1];

  // 괄호 적용하기
  if (idx + 2 < N) {
    const temp = calc(
      Number(expression[idx]),
      expression[idx + 1],
      Number(expression[idx + 2])
    );
    DFS(idx + 4, calc(total, preOp, temp));
  }

  // 괄호 적용 안하기
  DFS(idx + 2, calc(total, preOp, Number(expression[idx])));
}
function calc(a, op, b) {
  if (op === "+") {
    return a + b;
  } else if (op === "-") {
    return a - b;
  } else {
    return a * b;
  }
}
