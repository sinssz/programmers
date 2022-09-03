function solution() {
    const board = [
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 3],
        [0, 2, 5, 0, 1],
        [4, 2, 4, 4, 2],
        [3, 5, 1, 3, 1]
    ];
    const moves = [1, 5, 3, 5, 1, 2, 1, 4];
    const box = [];
    let answer = 0;

    for (var i = 0; i < moves.length; i++) {
        const rowIndex = moves[i] - 1;
        console.log(rowIndex);
        for (var j = 0; j < board.length; j++) {
            const row = board[j];
            if (row[rowIndex] !== 0) {
                if (box.length !== 0 && box[box.length - 1] === row[rowIndex]) {
                    box.pop();
                    answer += 2;
                } else {
                    box.push(row[rowIndex]);
                }
                row[rowIndex] = 0;
                break;
            }
        }
    }
    return answer;
}

solution();

function test() {
    const test = [0];
    console.log(test.pop());
    // for (var i = 0; i < 100; i++) {
    //     for (var j = 0; j < 100; j++) {
    //         console.log(j);
    //         if (j === 10) {
    //             break;
    //         }
    //     }
    // }
}

// test();
