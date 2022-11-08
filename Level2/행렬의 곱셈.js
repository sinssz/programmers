function solution(arr1, arr2) {
  let answer = [];
  for (let i = 0; i < arr1.length; i++) {
    let arr = [];
    for (let j = 0; j < arr2[0].length; j++) {
      let sum = 0;
      for (let k = 0; k < arr1[i].length; k++) {
        console.log(arr1[i][k], arr2[k][j]);
        sum += arr1[i][k] * arr2[k][j];
      }
      arr.push(sum);
    }
    answer.push(arr);
  }
  // console.log(answer);
  return answer;
}

solution(
  [
    [1, 2, 3],
    [4, 5, 6],
  ],
  [
    [1, 4],
    [2, 5],
    [3, 6],
  ]
);

// arr1 :

// arr2 :

// return : [[14, 32], [32, 77]]
