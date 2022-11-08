function solution(arr) {
  arr.sort((a, b) => a - b);

  return arr.reduce((prev, cur) => {
    return (prev * cur) / getGcd(prev, cur);
  });
}

function getGcd(a, b) {
  if (b === 0) return a;

  return getGcd(b, a % b);
}

solution([2, 6, 8, 14]);
