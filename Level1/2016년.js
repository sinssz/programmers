function solution(a, b) {
  return new Date(`${a} ${b} 2016`).toDateString().split(" ")[0].toUpperCase();
}

solution();
