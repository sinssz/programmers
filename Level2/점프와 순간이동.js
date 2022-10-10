function solution(n) {
  let used = 0;
  while (n > 0) {
    if (n % 2 !== 0) {
      n = n - 1;
      used++;
    } else {
      n = n / 2;
    }
  }
  return used;
}

solution(5000);
