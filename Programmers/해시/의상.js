// 풀이 1: Map() 사용
function solution(clothes) {
  // 종류별 개수 세기
  const countByType = new Map();
  for (const [, type] of clothes) {
    countByType.set(type, (countByType.get(type) || 0) + 1);
  }
  // (각 종류의 개수+1)을 전부 곱하기
  // 아무것도 안 입는 경우 제외
  let ways = 1;
  for (const cnt of countByType.values()) {
    ways *= cnt + 1;
  }
  return ways - 1;
}

// 풀이 2: reduce() 사용
function solution(clothes) {
    // { 종류: 개수 } 객체 만들기
  const countByType = clothes.reduce((acc, [, type]) => {
    acc[type] = (acc[type] || 0) + 1;
    return acc;
  }, {});
  // [ 종류별 개수 ] 배열 만들고 경우의 수 계산
  return Object.values(countByType).reduce((res, n) => res * (n + 1), 1) - 1;
}
