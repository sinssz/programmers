function solution() {
  const arr = [4, 3, 2, 1];
  if (arr.length <= 1) return [-1];
  arr.splice(arr.indexOf(Math.min.apply(null, arr)), 1);
  return arr;
}

solution();
