// 7번 문제: 치즈(cheese.js)
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

let [N, M] = input[0].split(" ").map((v) => +v);

let graph = input.slice(1).map((v) => v.split(" "));

const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];

let time = 0;
let answer = 0;
let queue = [];

function DFS(startNode, visited, queue) {
  let [x, y] = startNode;
  if (graph[x][y] === "1") return;
  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];
    if (nx >= 0 && ny >= 0 && nx < N && ny < M && visited[nx][ny] === -1) {
      if (graph[nx][ny] === "1") {
        visited[nx][ny] = 1;
        queue.push([nx, ny]);
      } else {
        visited[nx][ny] = 0;
      }
      visited[x][y] = 0;
      DFS([nx, ny], visited, queue);
    }
  }
}

function getCount(graph) {
  let sum = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (graph[i][j] === "1") sum++;
    }
  }
  return sum;
}

function melt() {
  let q = queue.slice();
  queue = [];
  while (q.length) {
    let [x, y] = q.shift();
    graph[x][y] = "0";
  }
}

while (true) {
  let visited = Array.from(Array(N), () => Array(M).fill(-1));
  DFS([0, 0], visited, queue);
  if (!queue.length) break;
  answer = getCount(graph);
  melt();
  time++;
}

console.log(time + "\n" + answer);
