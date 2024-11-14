// 2번 문제: NBA 농구(NBA.js)
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [N, ...input] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

let firstTeam = 0;
let secondTeam = 0;
const score = [];
let answer = [0, 0];

input.forEach((v) => {
  const [team, time] = v.split(" ");
  const [mm, ss] = time.split(":");
  if (team == 1) {
    firstTeam++;
  } else {
    secondTeam++;
  }
  const winningTime = Number(mm) * 60 + Number(ss);
  if (firstTeam > secondTeam) {
    score.push([1, winningTime]);
  } else if (secondTeam > firstTeam) {
    score.push([2, winningTime]);
  } else {
    score.push([0, winningTime]);
  }
});

score.push([0, 2880]);

for (let i = 1; i < score.length; i++) {
  if (score[i - 1][0] != 0)
    answer[score[i - 1][0] - 1] += score[i][1] - score[i - 1][1];
}

answer = answer
  .map((v) => {
    const mm = String(Math.floor(v / 60)).padStart(2, "0");
    const ss = String(v % 60).padStart(2, "0");
    return `${mm}:${ss}`;
  })
  .join("\n");

console.log(answer);
