function solution(n, a, b) {
  let turn = 0;
  while (a !== b) {
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    turn++;
  }

  return turn;
}

solution(8, 4, 7);
