// [1,2,3,4,6,7,8,0]	14
// [5,8,4,0,6,7,9]	6

function solution() {
    const numbers = [1, 2, 3, 4, 6, 7, 8, 0];
    const data = Array(10)
        .fill()
        .map((err, index) => index);
    const answer = data
        .filter((num, index) => !numbers.includes(num))
        .reduce((prev, curr) => prev + curr, 0);

    return answer;
}
solution();
