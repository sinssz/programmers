function solution() {
  const s = "abced";
  return s.length % 2 !== 0
    ? s.substring(Math.floor(s.length / 2), Math.floor(s.length / 2) + 1)
    : s.substring(Math.floor(s.length / 2) - 1, Math.floor(s.length / 2) + 1);
}

solution();
