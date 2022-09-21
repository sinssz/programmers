// 5	[2, 1, 2, 6, 2, 4, 3, 3]	[3,4,2,1,5]
function solution() {
  const N = 5;
  const stages = [2, 1, 2, 6, 2, 4, 3, 3];
  let answer = [];

  for (let i = 1; i <= N; i++) {
    const stageInCount = stages.filter((curStage) => curStage >= i).length;
    const stageFailCount = stages.filter((curStage) => curStage === i).length;
    const obj = { stage: i, failRatio: stageFailCount / stageInCount };
    answer.push(obj);
  }

  const result = answer.sort((a, b) => {
    return b.failRatio - a.failRatio;
  });

  console.log(result.map((el) => el.stage));
}

solution();
