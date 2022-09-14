function solution() {
    const x = 2;
    const n = 5;
    let add = 0;
    return Array(n)
        .fill(0)
        .map(() => {
            return (add += x);
        });
}
solution();
