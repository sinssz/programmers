function solution() {
  const s = "Zbcdefg";
  console.log(
    s.split("").sort((a, b) => {
      if (a > b) return -1;
      else if (b > a) return 1;
    })
  );
}

function solution() {
  return s.split("").sort().reverse().join("");
}

solution();
