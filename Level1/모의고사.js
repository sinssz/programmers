function solution() {
  const answers = [1, 2, 3, 4, 5];

  const id_1 = "12345";
  const id_2 = "21232425";
  const id_3 = "3311224455";

  const id_1_answer = id_1
    .padEnd(answers.length, id_1)
    .substring(0, answers.length)
    .split("");
  const id_2_answer = id_2
    .padEnd(answers.length, id_2)
    .substring(0, answers.length)
    .split("");
  const id_3_answer = id_3
    .padEnd(answers.length, id_3)
    .substring(0, answers.length)
    .split("");

  let id_1_correct = 0;
  let id_2_correct = 0;
  let id_3_correct = 0;
  let answer = [];

  answers.map((correct, i) => {
    if (correct == id_1_answer[i]) {
      id_1_correct++;
    }
    if (correct == id_2_answer[i]) {
      id_2_correct++;
    }
    if (correct == id_3_answer[i]) {
      id_3_correct++;
    }
  });
  const max = Math.max(id_1_correct, id_2_correct, id_3_correct);

  if (max === id_1_correct) answer.push(1);
  if (max === id_2_correct) answer.push(2);
  if (max === id_3_correct) answer.push(3);

  return answer;
}

solution();
