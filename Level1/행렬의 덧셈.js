function solution() {
  const arr1 = [
    [1, 2],
    [2, 3],
  ];
  const arr2 = [
    [3, 4],
    [5, 6],
  ];

  let answer = [];
  for (let i = 0; i < arr1.length; i++) {
    const _arr1 = arr1[i];
    const _arr2 = arr2[i];
    const temp = [];
    for (let j = 0; j < _arr1.length; j++) {
      temp.push(_arr1[j] + _arr2[j]);
    }
    answer.push(temp);
  }
  return answer;
}
solution();
