function solution(answers) {
    var answer = [];
    var giveUp_1 = [1, 2, 3, 4, 5]
    var giveUp_2 = [2, 1, 2, 3, 2, 4, 2, 5]
    var giveUp_3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]

    var giveUp_cnt1 = 0
    var giveUp_cnt2 = 0
    var giveUp_cnt3 = 0

    for (var i in answers) {
        var correct = answers[i]

        var flag1 = Number(i) % giveUp_1.length
        var flag2 = Number(i) % giveUp_2.length
        var flag3 = Number(i) % giveUp_3.length

        if (correct == giveUp_1[flag1]) giveUp_cnt1++
        if (correct == giveUp_2[flag2]) giveUp_cnt2++
        if (correct == giveUp_3[flag3]) giveUp_cnt3++
    }

    var max = Math.max(giveUp_cnt1, giveUp_cnt2, giveUp_cnt3)

    if(max == giveUp_cnt1) answer.push(1)
    if(max == giveUp_cnt2) answer.push(2)
    if(max == giveUp_cnt3) answer.push(3)
    return answer;
}