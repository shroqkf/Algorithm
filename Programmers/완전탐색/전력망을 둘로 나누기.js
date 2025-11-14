function solution(n, wires) {
  const g = Array.from({ length: n + 1 }, () => []);
  for (const [a, b] of wires) {
    g[a].push(b);
    g[b].push(a);
  }

  const parent = Array(n + 1).fill(0);
  const sub = Array(n + 1).fill(0);

  // 루트 1에서 DFS로 parent/서브트리 크기 계산
  const stack = [[1, 0, 0]]; 
  // [node, parent, state], state: 0=진입(자식 방문 전), 1=귀환(자식 처리 후)
  while (stack.length) {
    const [u, p, st] = stack.pop();
    if (st === 0) {
      parent[u] = p;
      stack.push([u, p, 1]);       // 귀환 단계 예약
      for (const v of g[u]) {
        if (v === p) continue;
        stack.push([v, u, 0]);     // 자식 진입
      }
    } else {
      // 귀환: sub[u] = 1 + Σ sub[child]
      let s = 1;
      for (const v of g[u]) {
        if (v === p) continue;
        s += sub[v];
      }
      sub[u] = s;
    }
  }

  let ans = Infinity;
  // 모든 간선은 (parent—child) 형태로 표현 가능
  for (let v = 2; v <= n; v++) {
    const k = sub[v];                // 간선 (parent[v]—v)를 자르면, v 쪽 크기가 k
    const diff = Math.abs(n - 2 * k);
    if (diff < ans) ans = diff;
  }
  return ans;
}
