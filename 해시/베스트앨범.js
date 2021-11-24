function solution(genres, plays) {
    var answer = [];

    var cntBygeneHash = {}
    for (var i = 0; i < genres.length; i++) {
        if (!cntBygeneHash[genres[i]]) {
            cntBygeneHash[genres[i]] = {
                "total": plays[i],
                "cnt": [plays[i]],
                "index": [i]
            }
        } else {
            cntBygeneHash[genres[i]]["total"] += plays[i]
            cntBygeneHash[genres[i]]["cnt"].push(plays[i])
            cntBygeneHash[genres[i]]["index"].push(i)
        }
    }

    var orderByTotal = Object.entries(cntBygeneHash).sort((a, b) => {
        return b[1].total - a[1].total
    })

    if (orderByTotal.length > 1) {
        for (var i = 0; i < orderByTotal.length; i++) {
            orderByTotal[i][1].cnt.sort((a, b) => b - a)
            if (orderByTotal[i][1].cnt.length > 1) {
                answer.push(orderByTotal[i][1].cnt[0]).push(orderByTotal[i][1].cnt[1])
            } else {
                answer.push(orderByTotal[i][1].cnt[0])
            }
        }
    } else {
        orderByTotal[0][1].cnt.sort((a, b) => b - a)
        if (orderByTotal[0][1].cnt.length > 1) {
            answer.push(orderByTotal[0][1].cnt[0]).push(orderByTotal[0][1].cnt[1])
        } else {
            answer.push(orderByTotal[0][1].cnt[0])
        }
    }
    answer = answer.map((v) => {
        var index = plays.indexOf(v)
        delete plays[index]
        return index
    })
    return answer
}