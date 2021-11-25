function solution(progresses, speeds) {
    var answer = [];

    while (progresses[0]) {
        for (var i = 0; i < speeds.length; i++) {
            if (progresses[i] < 100) {
                progresses[i] += speeds[i]
            }
        }

        var cnt = 0
        while (progresses[0] >= 100) {
            cnt++
            progresses.shift()
            speeds.shift()
        }
        if (cnt > 0) {
            answer.push(cnt)
        }
    }
    return answer;
}