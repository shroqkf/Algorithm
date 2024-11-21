// 9번 문제: 뮤탈리스트(Mutalisk.js)
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const SCV = input[1].split(" ").map(Number);

if (N == 2) {
  SCV.push(0);
} else if (N == 1) {
  SCV.push(0);
  SCV.push(0);
}

const dx = [9, 3, 9, 3, 1, 1];
const dy = [3, 9, 1, 1, 9, 3];
const dz = [1, 1, 3, 9, 3, 9];

let memo = Array.from(Array(61), () =>
  Array.from(Array(61), () => Array(61).fill(Infinity))
);

// DP와 재귀를 활용
function mutalisk(scv1, scv2, scv3) {
  if (scv1 < 0) scv1 = 0;
  if (scv2 < 0) scv2 = 0;
  if (scv3 < 0) scv3 = 0;

  if (scv1 == 0 && scv2 == 0 && scv3 == 0) {
    return 0;
  }

  let returnMemo = memo[scv1][scv2][scv3];

  if (returnMemo != Infinity) {
    return returnMemo;
  }

  for (let i = 0; i < 6; i++) {
    returnMemo = Math.min(
      returnMemo,
      mutalisk(scv1 - dx[i], scv2 - dy[i], scv3 - dz[i]) + 1
    );
  }
  memo[scv1][scv2][scv3] = returnMemo;
  return returnMemo;
}

const answer = mutalisk(SCV[0], SCV[1], SCV[2]);
console.log(answer);
