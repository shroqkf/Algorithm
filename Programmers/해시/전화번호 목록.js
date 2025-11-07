// 풀이 1: 해시(Set) + 모든 접두어 탐색
function solution(phone_book) {
  const set = new Set(phone_book);
  for (const num of phone_book) {
    for (let cut = 1; cut < num.length; cut++) {
      if (set.has(num.slice(0, cut))) return false;
    }
  }
  return true;
}

// 풀이 2: 정렬 + 인접 비교
function solution(phone_book) {
  phone_book.sort();
  for (let i = 0; i < phone_book.length - 1; i++) {
    if (phone_book[i + 1].startsWith(phone_book[i])) return false;
  }
  return true;
}
