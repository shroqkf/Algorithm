// 7번 문제: 빈도 정렬(sortFrequencies.js)
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const nums = input.map((v) => v.split(" ").map((v) => +v));
const N = nums[0].shift();
const C = nums[0].shift();

let array = [];

for (let i = 0; i < N; i++) array.push(nums[1][i]);

let map = new Map();
for (let i = 0; i < N; i++) {
  if (!map.has(array[i])) map.set(array[i], 1); //맵에 없는 요소라면 value 값 1
  else map.set(array[i], map.get(array[i]) + 1); //맵에 있으면 원래 value 값에 +1
}
let mapToArray = []; //정렬위해 맵을 2차원배열로 만들기 위함
map.forEach((value, key) => {
  mapToArray.push([key, value]); //[][0]에는 key값,[][1]에는 value값
});
mapToArray.sort((a, b) => {
  return b[1] - a[1];
}); //value 값에 따라 정렬

let answer = ""; //정답 담기위한 변수, 시간초과때문에 console.log 한번만 하기 위함

for (let i = 0; i < mapToArray.length; i++) {
  answer += Array(mapToArray[i][1]).fill(mapToArray[i][0]).join(" ") + " ";
}

console.log(answer);
