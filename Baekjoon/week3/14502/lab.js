// 6번 문제: 연구소(lab.js)
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

let [N, M] = input.shift().split(" ").map(Number);

const graph = input.map((i) => i.split(" ").map(Number));
const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];
let answer = 0;

function BFS(arr) {
  let cnt = 0;
  let queue = [];
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (arr[i][j] === 2) queue.push([i, j]);
    }
  }
  while (queue.length) {
    const [curX, curY] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [curX + dx[i], curY + dy[i]];
      if (nx >= 0 && ny >= 0 && nx < N && ny < M && arr[nx][ny] === 0) {
        arr[nx][ny] = 2;
        queue.push([nx, ny]);
      }
    }
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (arr[i][j] === 0) {
        cnt += 1;
      }
    }
  }
  return cnt;
}

function DFS(cnt) {
  if (cnt === 3) {
    let arr = graph.map((v) => [...v]);
    let safeArea = BFS(arr);
    answer = Math.max(answer, safeArea);
    return;
  }
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (graph[i][j] === 0) {
        graph[i][j] = 1;
        DFS(cnt + 1);
        graph[i][j] = 0;
      }
    }
  }
}
DFS(0);
console.log(answer);
