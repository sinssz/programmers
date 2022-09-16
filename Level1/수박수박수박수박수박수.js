function solution() {
  const n = 4;
  let answer = "";
  for (let i = 1; i <= n; i++) {
    if (i % 2) {
      answer += "수";
    } else {
      answer += "박";
    }
  }
  return answer;
}

function solution2() {
  const n = 4;
  const repeat = "수박";
  return repeat.repeat(n).substring(0, 4);
}
