function solution() {
    const n = 12345;
    return n
        .toString()
        .split("")
        .reverse()
        .map((element) => Number(element));
}
solution();
