// ["abcd", "abce", "cdx"];
function solution() {
  const strings = ["abce", "abcd", "cdx"];
  const n = 2;

  return strings.sort((a, b) =>
    a.split("")[n] < b.split("")[n]
      ? -1
      : a.split("")[n] === b.split("")[n]
      ? a < b
        ? -1
        : 1
      : 1
  );
}

solution();
