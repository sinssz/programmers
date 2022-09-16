function solution() {
  // "AB"	1	"BC"
  // "z"	1	"a"
  // "a B z"	4	"e F d"
  const s = "a B z";
  const n = 4;
  const result = s
    .split("")
    .map((char) => {
      if (char === " ") return " ";
      if (char.toLowerCase().charCodeAt() + n > 122) {
        return String.fromCharCode(char.charCodeAt() + n - 26);
      } else {
        return String.fromCharCode(char.charCodeAt() + n);
      }
    })
    .join("");
  console.log(result);
}

solution();
