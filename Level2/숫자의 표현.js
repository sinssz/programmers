function solution() {
    const n = 15;

    let start = 1;
    let add = 1;
    let sum = 0;
    let type = 0;
    while (start <= Math.floor(n / 2)) {
        sum += add;

        if (sum >= n) { 
            if (sum === n) type++
            sum = 0;
            start++;
            add = start;
        } else {
            add++
        }
    }
    console.log(type)

    return type+1;
}

solution();
