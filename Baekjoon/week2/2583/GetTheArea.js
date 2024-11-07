// 4번 문제: 영역 구하기(GetTheArea.js)
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const [M, N, K] = input[0].split(" ").map(Number);
const area = Array.from(Array(M), () => Array(N).fill(0));

const dx = [0, 0, -1, 1];
const dy = [1, -1, 0, 0];

const visited = Array.from(Array(M), () => Array(N).fill(false));

for (let i = 1; i <= K; i++) {
  const [ax, ay, bx, by] = input[i].split(" ").map(Number);

  for (let y = M - by; y < M - ay; y++) {
    for (let x = ax; x < bx; x++) {
      area[y][x] = 1;
    }
  }
}

let count = 0;

function DFS(x, y) {
  count++;
  visited[x][y] = true;

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];
    if (
      nx >= 0 &&
      nx < M &&
      ny >= 0 &&
      ny < N &&
      !area[nx][ny] &&
      !visited[nx][ny]
    ) {
      DFS(nx, ny);
    }
  }
}

let answer = [];

for (let i = 0; i < M; i++) {
  for (let j = 0; j < N; j++) {
    count = 0;
    if (!visited[i][j] && !area[i][j]) {
      DFS(i, j);
      answer.push(count);
    }
  }
}
console.log(answer.length);
console.log(answer.sort((a, b) => a - b).join(" "));
