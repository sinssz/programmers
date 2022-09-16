function solution() {
  const n = 3;
  const m = 12;
  let answer = [];
  for (let i = 1; i <= Math.min(n, m); i++) {
    if (n % i === 0 && m % i === 0) {
      answer[0] = i;
    }
  }
  let count = 1;
  while (true) {
    if (count % n === 0 && count % m === 0) {
      answer[1] = count;
      break;
    }
    count++;
  }
  return answer;
}

solution();
