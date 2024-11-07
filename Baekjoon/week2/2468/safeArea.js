// 3번 문제: 안전 영역(safeArea.js)
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [N, ...arr] = input;
const area = arr.map((item) => item.split(" ").map(Number));

const dx = [0, 0, -1, 1];
const dy = [1, -1, 0, 0];

let maxHeight = 0;

for (const x of area) {
  maxHeight = Math.max(maxHeight, ...x);
}

function DFS(area, x, y, target) { 
  if (x < 0 || x >= N || y < 0 || y >= N) { 
    return false;
  }

  if (area[x][y] <= target) {
    return false;
  }

  area[x][y] = 0;
  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];
    DFS(area, nx, ny, target);
  }
  return true;
}

let answer = 0;
let count = 0;
while (maxHeight > -1) {
  const newArea = area.map((item) => [...item]);

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (DFS(newArea, i, j, maxHeight)) { //초기화한 area, 행, 열, 검사할 최대 높이 인자로 전달
        count++;
      }
    }
  }

  answer = Math.max(answer, count);
  count = 0;

  maxHeight--;
}

console.log(answer);
