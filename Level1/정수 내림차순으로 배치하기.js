function solution() {
    const n = 118372;
    return +n
        .toString()
        .split("")
        .sort((a, b) => {
            return Number(b) - Number(a);
        })
        .join("");
}

solution();
