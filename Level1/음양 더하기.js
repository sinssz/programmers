// [4,7,12]	[true,false,true]	9
// [1,2,3]	[false,false,true]	0
function solution() {
    const absolutes = [4, 7, 12];
    const signs = [true, false, true];

    return absolutes.reduce(
        (acc, cur, index) => (signs[index] ? acc + cur : acc - cur),
        0
    );
}
