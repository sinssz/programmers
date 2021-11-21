function solution(clothes) {
    var answer = 1;

    var clothesMap = {}
    for (var i = 0; i < clothes.length; i++) {
        var clothesCategory = clothes[i][1]
        var clothe = clothes[i][0]
        if (!clothesMap[clothesCategory]) {
            clothesMap[clothesCategory] = [clothe]
        } else {
            clothesMap[clothesCategory].push(clothe)
        }
    }

    var cntByCategory = Object.keys(clothesMap).map((v) => {
        return clothesMap[v].length
    })

    for (var i = 0; i < cntByCategory.length; i++) {
        answer *= (cntByCategory[i] + 1)
    }

    return answer - 1
}