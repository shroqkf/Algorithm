// 3번 문제: 좋은 단어(goodWord.js)
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());
const [N, ...words] = input;

function solution(N, words) {
  let answer = 0;

  words.map((v) => {
    let arr = [];
    v = v.split("");

    for (let word of v) {
      if (arr[arr.length - 1] === word) arr.pop();
      else arr.push(word);
    }
    if (arr.length === 0) answer++;
  });
  return answer;
}

console.log(solution(N, words));
