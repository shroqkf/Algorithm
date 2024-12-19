// 3번 문제: 게리맨더링(gerrymandering.js)
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

let idx = 0;
const N = parseInt(input[idx++]);
const people = input[idx++].split(" ").map(Number);
let lines = Array.from({ length: 6 }, (_) => []);
let teamA = [];
let teamB = [];
let min = Number.MAX_SAFE_INTEGER;
for (let i = 0; i < N; i++) {
  lines[i] = input[idx++]
    .split(" ")
    .slice(1)
    .map(Number)
    .map((v) => v - 1);
}

// BFS로 특정 팀의 구역들이 모두 연결되어 있는지 확인
const BFS = (now, total, team) => {
  let queue = [now];
  let index = 0;
  let visited = Array.from({ length: N }, (_) => false);
  visited[now] = true;

  while (queue.length > index) {
    const n = queue[index];
    for (let i = 0; i < lines[n].length; i++) {
      const next = lines[n][i];
      if (!visited[next] && team.includes(next)) {
        queue.push(next);
        visited[next] = true;
      }
    }
    index++;
  }
  return visited.filter((v) => v === true).length === total;
};

// 조건을 만족하는 경우 두 선거구의 인구 차이를 계산
const combination = (A, arr, last) => {
  if (arr.length === A) {
    teamA = arr;
    let tmp = [];

    for (let i = 0; i < N; i++) {
      if (arr.includes(i)) continue;
      tmp.push(i);
    }
    teamB = tmp;
    const B = N - A;

    if (BFS(teamA[0], A, teamA) && BFS(teamB[0], B, teamB)) {
      let sumA = 0;
      let sumB = 0;

      people.forEach((value, index) => {
        if (teamA.includes(index)) {
          sumA += value;
        } else {
          sumB += value;
        }
      });
      min = Math.min(min, Math.abs(sumB - sumA));
    }
    return;
  }

  for (let i = last; i < N; i++) {
    combination(A, [...arr, i], i + 1);
  }
};
for (let i = 1; i < N; i++) {
  combination(i, [0], 1);
}
min = min === Number.MAX_SAFE_INTEGER ? -1 : min;
console.log(min);
