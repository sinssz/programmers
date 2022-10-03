function solution() {
    const s = "(())()";
    if (s[0] === ")") return false;
    if (s.length % 2 !== 0) return false;

    let stack = 0;
    let result = true;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            stack += 1;
        } else {
            stack -= 1;
        }

        if (stack < 0) {
            result = false;
            break;
        }
    }

    if (stack !== 0) {
        result = false;
    }
    return result;
}

solution();
