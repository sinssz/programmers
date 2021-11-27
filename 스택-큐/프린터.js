function solution(priorities, location) {
    var answer = 0;

    var prioritiesList = priorities.map((v, i) => {
        return {
            "location": i,
            "value": v
        }
    })

    var cnt = 0
    while (true) {
        var temp = prioritiesList.shift()
        if (prioritiesList.filter((v) => v.value > temp.value).length > 0) {
            prioritiesList.push(temp)
        } else {
            cnt++
            if(temp.location == location){
                answer = cnt
                return answer;
            }
        }
    }
}