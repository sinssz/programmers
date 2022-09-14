function solution() {
    const x = 11;
    const sum = x
        .toString()
        .split("")
        .reduce((acc, cur) => (acc += Number(cur)), 0);
    return x % sum === 0;
}

solution();
