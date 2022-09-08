function solution() {
    const n = 10;
    let flag = true;
    let answer = 2;
    while (flag) {
        if (n % answer === 1) {
            flag = false;
            continue;
        }
        answer++;
    }
    return answer;
}

solution();
