function solution() {
  const numbers = [2, 1, 3, 4, 1];

  let answer = [];
  for (let i = 0; i < numbers.length; i++) {
    const fix = numbers[i];

    for (let j = i + 1; j < numbers.length; j++) {
      if (!answer.includes(fix + numbers[j])) {
        answer.push(fix + numbers[j]);
      }
    }
  }

  return answer.sort((a, b) => a - b);
}

solution();
