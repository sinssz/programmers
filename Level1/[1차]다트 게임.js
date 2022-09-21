function solution() {
  //   const dartResult = "1S*2T*3S";
  const dartResult = "1D2S#10S";

  let score = 0;
  let answer = [];
  for (let i = 0; i < dartResult.length; i++) {
    if (!isNaN(dartResult[i])) {
      if (Number(dartResult[i]) === 1 && Number(dartResult[i + 1]) === 0) {
        score = 10;
        i++;
      } else {
        score = Number(dartResult[i]);
      }
    } else if (dartResult[i] === "S") {
      answer.push(score);
    } else if (dartResult[i] === "D") {
      answer.push(Math.pow(score, 2));
    } else if (dartResult[i] === "T") {
      answer.push(Math.pow(score, 3));
    } else if (dartResult[i] === "*") {
      answer[answer.length - 1] *= 2;
      answer[answer.length - 2] *= 2;
    } else if (dartResult[i] === "#") {
      answer[answer.length - 1] *= -1;
    }
    console.log();
  }
  return answer.reduce((acc, curr) => (acc += curr), 0);
}

solution();
