function solution() {
    const n = 12;

    let answer = 0;
    for (let i = 1; i <= 12; i++) {
        if (n % i === 0) {
            console.log(answer, i);
            answer += i;
        }
    }
    return answer;
}

solution();
