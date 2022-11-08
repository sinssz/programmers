function solution(distance, scope, times) {
  let answer = distance;
  for (let i = 0; i < scope.length; i++) {
    const start = Math.min(scope[i][0], scope[i][1]);
    const end = Math.max(scope[i][0], scope[i][1]);
    const workTime = times[i][0];
    const restTime = times[i][1];

    for (let j = start; j <= end; j++) {
      const total = workTime + restTime;
      const status = j % total;

      if (status > 0 && status <= workTime) {
        answer = Math.min(answer, j);
        break;
      }
    }
  }
  return answer;
}

solution(
  10,
  [
    [3, 4],
    [5, 8],
  ],
  [
    [2, 5],
    [4, 3],
  ]
);
