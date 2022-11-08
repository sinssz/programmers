function solution(n, words) {
  let turn = 0;
  let usedWord = [];
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let player = i % n;
    if (player === 0) {
      turn++;
    }

    if (usedWord.indexOf(word) !== -1) {
      return [player + 1, turn];
    } else {
      usedWord.push(word);
    }

    if (i > 0) {
      let preWord = words[i - 1];

      if (preWord[preWord.length - 1] !== word[0]) {
        return [player + 1, turn];
      }
    }
  }
  return [0, 0];
}

solution(5, [
  "hello",
  "observe",
  "effect",
  "take",
  "either",
  "recognize",
  "encourage",
  "ensure",
  "establish",
  "hang",
  "gather",
  "refer",
  "reference",
  "estimate",
  "executive",
]);
