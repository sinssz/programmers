function solution(n) {
    const oneCount = n
        .toString(2)
        .split("")
        .filter((n) => n === "1").length;
    let nextNum = n + 1;
    while (true) {
        const _oneCount = nextNum
            .toString(2)
            .split("")
            .filter((n) => n === "1").length;
        
        if (_oneCount === oneCount) {
            break;
        } else {
            nextNum++
        }
    }
    return nextNum
}

solution(78);
