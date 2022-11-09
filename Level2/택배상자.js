function solution(order) {
  const subContainer = [];
  let index = 0;
  for (let i = 1; i <= order.length; i++) {
    subContainer.push(i);
    while (
      subContainer.length > 0 &&
      subContainer[subContainer.length - 1] === order[index]
    ) {
      subContainer.pop();
      index++;
    }
  }
  return order;
}
solution([5, 4, 3, 2, 1]);
