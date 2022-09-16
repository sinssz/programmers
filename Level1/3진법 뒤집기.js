function solution() {
  const n = 125;
  return parseInt(n.toString(3).split("").reverse().join(""), 3);
}
