function solution() {
    let answer = 6;
    let count = 0;
    while (answer !== 1 && count < 500) {
        if (answer === 1) return 1;
        if (answer % 2 === 0) {
            answer = answer / 2;
        } else {
            answer = answer * 3 + 1;
        }
        console.log(answer);
        count++;
    }
    return answer === 1 ? count : -1;
}
