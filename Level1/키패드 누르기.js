function solution(numbers, hand) {
    var answer = '';

    var phoneNumPosition = {
        1: [0, 0], 2: [1, 0], 3: [2, 0],
        4: [0, 1], 5: [1, 1], 6: [2, 1],
        7: [0, 2], 8: [1, 2], 9: [2, 2],
        "*": [0, 3], 0: [1, 3], "#": [2, 3]
    }

    var currentPositionL = "*";
    var currentPositionR = "#";

    for (var i in numbers) {
        console.log(phoneNumPosition[numbers[i]][0])
        var targetX = phoneNumPosition[numbers[i]][0]
        var targetY = phoneNumPosition[numbers[i]][1]

        var lX = phoneNumPosition[currentPositionL][0]
        var lY = phoneNumPosition[currentPositionL][1]

        var rX = phoneNumPosition[currentPositionR][0]
        var rY = phoneNumPosition[currentPositionR][1]

        if ([1, 4, 7].indexOf(numbers[i]) != -1) {
            answer += "L"
            currentPositionL = numbers[i]
        } else if ([3, 6, 9].indexOf(numbers[i]) != -1) {
            answer += "R";
            currentPositionR = numbers[i]
        } else {
            if (Math.abs(targetX - lX) + Math.abs(targetY - lY) > Math.abs(targetX - rX) + Math.abs(targetY - rY)) {
                answer += "R"
                currentPositionR = numbers[i]
            } else if (Math.abs(targetX - lX) + Math.abs(targetY - lY) < Math.abs(targetX - rX) + Math.abs(targetY - rY)) {
                answer += "L"
                currentPositionL = numbers[i]
            } else {
                if (hand == "right") {
                    answer += "R"
                    currentPositionR = numbers[i]
                } else {
                    answer += "L"
                    currentPositionL = numbers[i]
                }
            }
        }
    }
    return answer;
}