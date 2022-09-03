// [1,2,3,4]	[-3,-1,0,2]	3
// [-1,0,1]	[1,0,-1]	-2
function solution() {
    const a = [1, 2, 3, 4];
    const b = [-3, -1, 0, 2];

    return a.reduce((acc, curr, index) => (acc += curr * b[index]), 0);
}
