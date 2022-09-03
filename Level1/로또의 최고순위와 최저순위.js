// function solution(lottos, win_nums) {
//     lottos = [44, 1, 0, 0, 31, 25]
//     win_nums = [31, 10, 45, 1, 6, 19]
//     var answer = []
//     var rank = {
//         6: 1,
//         5: 2,
//         4: 3,
//         3: 4,
//         2: 5,
//         1: 6,
//         0: 6
//     }
//     var minRank
//     var maxRank

//     var correctCount = lottos.filter((el, index, arr) => {
//         return win_nums.indexOf(el) != -1
//     }).length

//     var zeroCount = lottos.filter((el, index, arr) => {
//         return el == 0
//     }).length
//     answer.push(rank[correctCount] - zeroCount == 0 ? 1 : rank[correctCount] - zeroCount)
//     answer.push(rank[correctCount])

//     return answer
// }

// lottos	win_nums	result
// [44, 1, 0, 0, 31, 25]	[31, 10, 45, 1, 6, 19]	[3, 5]
// [0, 0, 0, 0, 0, 0]	[38, 19, 20, 40, 15, 25]	[1, 6]
// [45, 4, 35, 20, 3, 9]	[20, 9, 3, 45, 4, 35]	[1, 1]

function solution() {
  const lottos = [44, 1, 0, 0, 31, 25];
  const win_nums = [31, 10, 45, 1, 6, 19];

  let correctCount = 0;
  let lossCount = 0;
  lottos.map((num) => {
    if (win_nums.indexOf(num) !== -1) {
      correctCount += 1;
    }
    if (num === 0) {
      lossCount += 1;
    }
  });

  const result = [
    7 - (correctCount + lossCount) === 7 ? 6 : 7 - (correctCount + lossCount),
    7 - correctCount === 7 ? 6 : 7 - correctCount,
  ];
  return result;
}

solution();
