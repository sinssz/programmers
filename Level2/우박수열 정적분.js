function solution(k, ranges) {
  const arr = [k];
  while (k !== 1) {
    if (!(k % 2)) {
      k = k / 2;
    } else {
      k = k * 3 + 1;
    }
    arr.push(k);
  }

  const result = [];
  for (let i = 0; i < ranges.length; i++) {
    const range = ranges[i];
    let sum = 0;
    if (range[0] >= arr.length + range[1]) {
      result.push(-1);
      continue;
    }
    for (let j = range[0]; j < arr.length + range[1] - 1; j++) {
      sum += (arr[j] + arr[j + 1]) / 2;
    }
    result.push(sum);
  }
  return result;
}

solution(5, [
  [0, 0],
  [0, -1],
  [2, -3],
  [3, -3],
]);
