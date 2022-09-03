function solution() {
  const arr = [1, 1, 3, 3, 0, 1, 1];
  var answer = [];

  arr.reduce((prev, curr) => {
    if (answer[answer.length - 1] !== curr) {
      answer.push(curr);
    }
  }, answer);

  return answer;
}

solution();

// arr	answer
// [1,1,3,3,0,1,1]	[1,3,0,1]
// [4,4,4,3,3]	[4,3]
