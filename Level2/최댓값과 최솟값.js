function solution() {
  const s = "-1 -2 -3 -4";
  const numbers = s.split(" ");
  const max = Math.max(...numbers);
  const min = Math.min(...numbers);

  return `${min} ${max}`;
}

solution();
