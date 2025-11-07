// 최소 가로 = 각 카드의 긴 변의 최댓값
// 최소 세로 = 각 카드의 짧은 변의 최댓값
function solution(sizes) {
  let mw = 0; // 긴 변들 중 최댓값
  let mh = 0; // 짧은 변들 중 최댓값

  for (const [a, b] of sizes) {
    const w = Math.max(a, b);
    const h = Math.min(a, b);
    if (w > mw) mw = w;
    if (h > mh) mh = h;
  }
  return mw * mh;
}
