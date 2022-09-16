function solution() {
  const left = 13;
  const right = 17;
  let answer = 0;
  for (let i = left; i <= right; i++) {
    let cnt = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        cnt++;
      }
    }
    answer = cnt % 2 === 0 ? answer + i : answer - i;
  }

  return answer;
}

solution();
