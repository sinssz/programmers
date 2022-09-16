function solution() {
  const s = "try hello world";
  const arr = s.split(" ");
  console.log(
    arr
      .map((word) =>
        word
          .split("")
          .map((alph, index) => {
            if (index % 2 === 0) {
              return alph.toUpperCase();
            }
            return alph.toLowerCase();
          })
          .join("")
      )
      .join(" ")
  );
}

solution();
