function solution() {
  const n = 5;
  const lost = [2, 4];
  const reserve = [3];

  const students = Array(n).fill(0);

  lost.sort().map((lost) => {
    students[lost - 1] = -1;
  });

  const realReserve = reserve.sort().filter((reserve) => {
    if (students[reserve - 1] === -1) {
      students[reserve - 1] = 0;
    } else {
      return reserve;
    }
  });

  for (let i = 0; i < realReserve.length; i++) {
    const prevId = realReserve[i] - 2;
    const nextId = realReserve[i];

    if (prevId >= 0 && students[prevId] === -1) {
      students[prevId] = 0;
      continue;
    }

    if (nextId >= 0 && students[nextId] === -1) {
      students[nextId] = 0;
    }
  }

  //   console.log(students, reverse_);
  return students.filter((stu) => stu === 0).length;
}

solution();
