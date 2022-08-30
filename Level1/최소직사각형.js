function solution() {
  const sizes = [
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ];

  const result = [0, 0]; // [최대 중 최대, 최소 중 최대]
  sizes.forEach(([width, height]) => {
    const big = width > height ? width : height;
    const small = width < height ? width : height;
    if (result[0] < big) {
      result[0] = big;
    }
    if (result[1] < small) {
      result[1] = small;
    }
  });

  return result[0] * result[1];
}

solution();
// 명함 번호	가로 길이	세로 길이
// 1	60	50
// 2	30	70
// 3	60	30
// 4	80	40

// [[60, 50], [30, 70], [60, 30], [80, 40]]	4000
// [[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]]	120
// [[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]]	133
