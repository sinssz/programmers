function solution(lottos, win_nums) {
    lottos = [44, 1, 0, 0, 31, 25]
    win_nums = [31, 10, 45, 1, 6, 19]
    var answer = []
    var rank = {
        6: 1,
        5: 2,
        4: 3,
        3: 4,
        2: 5,
        1: 6,
        0: 6
    }
    var minRank
    var maxRank

    var correctCount = lottos.filter((el, index, arr) => {
        return win_nums.indexOf(el) != -1
    }).length

    var zeroCount = lottos.filter((el, index, arr) => {
        return el == 0
    }).length
    answer.push(rank[correctCount] - zeroCount == 0 ? 1 : rank[correctCount] - zeroCount)
    answer.push(rank[correctCount])

    return answer
}