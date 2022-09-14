function solution() {
    const a = 3;
    const b = 6;
    if (a === b) return a;

    let answer = 0;
    const start = Math.min(a, b);
    const end = Math.max(a, b);
    for (let i = start; i <= end; i++) {
        answer += i;
    }
    return answer;
}

solution();
