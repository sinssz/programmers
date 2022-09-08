function solution() {
    const n = 123;
    const arr = n.toString().split("");
    console.log(arr);
    return arr.reduce((acc, curr) => {
        return acc + Number(curr);
    }, 0);
}

solution();
