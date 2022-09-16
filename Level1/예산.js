function solution() {
  const d = [1, 3, 2, 5, 4];
  const budget = 9;

  const sortD = d.sort((a, b) => a - b);
  let totalPrice = 0;
  let answer = 0;
  for (let i = 0; i < sortD.length; i++) {
    if (totalPrice + sortD[i] <= budget) {
      totalPrice += sortD[i];
      answer++;
    } else {
      break;
    }
  }
  return answer;
}

solution();
