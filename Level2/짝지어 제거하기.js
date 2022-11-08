function solution(s) {
  let result = [];
  if (s.length % 2 !== 0) {
    return 0;
  }

  for (let i = 0; i < s.length; i++) {
    const word = s[i];
    if (result[result.length - 1] === word) {
      result.pop();
    } else {
      result.push(word);
    }
  }
  return result.length ? 0 : 1;
}
solution("baabaa");
// solution("cdcd");
