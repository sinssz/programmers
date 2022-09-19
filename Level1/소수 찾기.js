function solution() {
  const n = 5;
  let answer = 0;
  for (let i = 2; i <= n; i++) {
    const num = i;
    let cnt = 0;
    for (j = 1; j <= Math.sqrt(num); j++) {
      if (num % j === 0) {
        cnt++;
      }
      if (cnt > 1) break;
    }
    if (cnt === 1) answer++;
  }
  return answer;
}

solution();
