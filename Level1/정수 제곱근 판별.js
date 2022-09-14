function solution() {
    const n = 121;
    if (!Math.sqrt(121).toString().split(".")[1]) {
        return (Math.sqrt(121) + 1) * (Math.sqrt(121) + 1);
    } else {
        return -1;
    }
}
solution();
