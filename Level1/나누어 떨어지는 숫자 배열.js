function solution() {
  const arr = [5, 9, 7, 10];
  const divisor = 5;
  const answer = arr
    .filter((num) => {
      return num % divisor === 0;
    })
    .sort((a, b) => a - b);

  return answer.length === 0 ? [-1] : answer;
}

solution();
