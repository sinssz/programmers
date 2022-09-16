function solution() {
  const price = 3;
  const money = 20;
  const count = 4;
  let totalPrice = 0;
  for (let i = 1; i <= 4; i++) {
    totalPrice += price * i;
  }

  return money >= totalPrice ? 0 : totalPrice - money;
}

solution();
