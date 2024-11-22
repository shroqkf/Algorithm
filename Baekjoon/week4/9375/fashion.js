// 2번 문제: 패션왕 신해빈(fashion.js)
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().split("\n");

let number = 0;
for (let i = 1; i <= +input[0]; i++) {
  // 각 테스트 케이스마다 obj 객체를 초기화하여 의상 종류별로 의상 목록을 저장한다.
  let obj = {};
  // n: 해빈이가 가진 의상의 수
  let n = +input[++number];
  // 반복문을 통해 의상 이름과 종류를 가져와서 obj에 저장한다.
  for (let j = 1; j <= n; j++) {
    input[j + number] = input[j + number].split(" ");
    let clothes = input[j + number][0];
    let kinds = input[j + number][1];
    if (obj[kinds]) {
      obj[kinds].push(clothes);
    } else {
      obj[kinds] = [clothes];
    }
  }
  // 각 테스트 케이스의 모든 의상 정보를 읽은 후, number를 업데이트하여 다음 테스트 케이스의 시작 지점으로 이동한다.
  number += n;
  let count = 1;
  for (let key in obj) {
    // 각 의상 종류에서 아무것도 선택하지 않는 경우
    count *= obj[key].length + 1;
  }
  // 모든 종류의 의상을 선택하지 않는 조합 제외하고 출력
  console.log(count - 1);
}
