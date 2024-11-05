// 1번 문제: 미로 탐색(labyrinthSearch.js)
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const map = input.map((row) => row.split("").map(Number));

function BFS(x, y) {
  const queue = [[x, y]];
  const result = [];
  const visisted = {};
  // vistied를 몇번째 방문했는지 판단하는 객체로 활용한다.
  visisted[[x, y]] = 1;

  // 상[0,1] 하[0,-1] 좌[-1,0] 우[1,0]
  let dx = [0, 0, -1, 1];
  let dy = [1, -1, 0, 0];
  while (queue.length) {
    for (let i = 0; i < queue.length; i++) {
      let coord = queue.shift();
      result.push(coord);
      for (let j = 0; j < 4; j++) {
        let nx = coord[0] + dx[j];
        let ny = coord[1] + dy[j];

        if (
          nx >= 0 &&
          ny >= 0 &&
          nx < N &&
          ny < M &&
          !visisted[[nx, ny]] &&
          map[nx][ny] === 1
        ) {
          // 해당 좌표에 도달할때마다 visited 객체값을 증가시켜준다.
          visisted[[nx, ny]] = visisted[coord] + 1;
          queue.push([nx, ny]);
        }
      }
    }
  }
  // N, M 좌표에 도달했을 때 visited객체에 담겨져 있는 값을 리턴한다.
  return visisted[[N - 1, M - 1]];
}

console.log(BFS(0, 0));
