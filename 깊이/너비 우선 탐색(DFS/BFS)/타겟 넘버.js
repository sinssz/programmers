function solution(numbers, target) {
    var answer = 0

    function dfs(count, sum) {
        if (count === numbers.length) {
            if (sum === target) {
                answer++
            }
            return
        }

        // + 일 경우
        dfs(count + 1, sum + numbers[count])
        // - 일 경우
        dfs(count + 1, sum - numbers[count])
    }

    dfs(0, 0)
    return answer
}