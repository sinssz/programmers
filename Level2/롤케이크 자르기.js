function solution(topping) {
  let result = 0;
  const me = new Map();
  const bro = new Map();
  for (let i = 0; i < topping.length; i++) {
    if (bro.has(topping[i])) {
      bro.set(topping[i], bro.get(topping[i]) + 1);
    } else {
      bro.set(topping[i], 1);
    }
  }

  for (let i = 0; i < topping.length - 1; i++) {
    if (me.has(topping[i])) {
      me.set(topping[i], me.get(topping[i]) + 1);
    } else {
      me.set(topping[i], 1);
    }

    bro.set(topping[i], bro.get(topping[i]) - 1);
    if (bro.get(topping[i]) === 0) bro.delete(topping[i]);

    if (me.size === bro.size) {
      result++;
    }
  }
  return result;
}

solution([1, 2, 1, 3, 1, 4, 1, 2]);
