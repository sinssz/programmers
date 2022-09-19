// n	5
// arr1	[9, 20, 28, 18, 11]
// arr2	[30, 1, 21, 17, 28]
// 출력	["#####","# # #", "### #", "# ##", "#####"]

function solution() {
  const n = 5;
  const arr1 = [9, 20, 28, 18, 11];
  const arr2 = [30, 1, 21, 17, 28];
  let result = [];
  for (let i = 0; i < n; i++) {
    const position1 = arr1[i].toString(2).padStart(n, "0").split("");
    const position2 = arr2[i].toString(2).padStart(n, "0").split("");

    let temp = [];
    for (let j = 0; j < position1.length; j++) {
      if (position1[j] === "0" && position2[j] === "0") {
        temp.push(" ");
      } else {
        temp.push("#");
      }
    }
    result.push(temp.join(""));
  }
  return result;
}

solution();
