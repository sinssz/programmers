function solution(n) {
  if (n === 1) return 1;
  if (n === 2) return 2;

  let p1 = 1,
    p2 = 2;
  let result = 0;
  for (let i = 3; i <= n; i++) {
    result = (p1 + p2) % 1234567;
    p1 = p2;
    p2 = result;
  }
  return result;
}
// 1 -> 1
// 2 -> 2
// 3 -> 3
// 4 -> 5
// 5 -> 8
// 6 -> 13

solution(2);
