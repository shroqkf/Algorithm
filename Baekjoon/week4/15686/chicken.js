// 5번 문제: 치킨 배달(chicken.js)
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const graph = input.map((v) => v.split(" ").map(Number));
const houses = [];
const chickens = [];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (graph[i][j] === 1) houses.push([i, j]);
    else if (graph[i][j] === 2) chickens.push([i, j]);
  }
}

function getDistance() {
  let total = 0;
  for (let i = 0; i < houses.length; i++) {
    let min = Number.MAX_SAFE_INTEGER; //해당 집에 대한 치킨거리
    for (let j = 0; j < chickens.length; j++) {
      if (visited[j] == true) {
        min = Math.min(
          min,
          Math.abs(houses[i][0] - chickens[j][0]) +
            Math.abs(houses[i][1] - chickens[j][1])
        );
      }
    }
    total += min; 
  }
  return total; //도시의 치킨거리
}

const visited = new Array(chickens.length).fill(false);
let answer = Number.MAX_SAFE_INTEGER;
//DFS 이용해서 M개의 치킨집을 선정하는 모든 경우를 탐색한다.
function DFS(idx, L) {
  if (L === M) {
    answer = Math.min(answer, getDistance()); //vistied의 상태가 true인 치킨 집들이 선정된 것.
    return;
  } else {
    for (let i = idx; i < chickens.length; i++) {
      if (visited[i] === true) continue;
      visited[i] = true;
      DFS(i, L + 1);
      visited[i] = false;
    }
  }
}
DFS(0, 0);
console.log(answer);
