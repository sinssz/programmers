// [3,1,2,3]	2
// [3,3,3,2,2,4]	3
// [3,3,3,2,2,2]	2
function solution() {
    const nums = [3, 3, 3, 2, 2, 4];
    const myPocketmonCount = nums.length / 2;
    let answer = [];

    nums.forEach((num, index) => {
        console.log(num);
        if (answer.length < myPocketmonCount && !answer.includes(num)) {
            answer.push(num);
        }
    });
    return answer.length;
}

solution();

// 다른 사람 풀이
// function solution(nums) {
//     const max = nums.length / 2;
//     const arr = [...new Set(nums)];

//     return arr.length > max ? max : arr.length;
// }
