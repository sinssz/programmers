function solution(jobs) {
    let answer = 0
    let j = 0
    let time = 0
    // 요청시간 순서로 오름차순 정렬
    jobs.sort((a, b) => {
        return a[0] - b[0]
    })

    const priorityQueue = []
    while (j < jobs.length || priorityQueue.length !== 0) {
        // 남아 있는 작업이 있고, 현재까지 진행 된 시간 보다 작은 요청 시간의 작업이 존재한다면  우선순위 큐에 적재
        if (jobs.length > j && time >= jobs[j][0]) {
            priorityQueue.push(jobs[j++])
            priorityQueue.sort((a, b) => { // 작업시간이 적게 걸리는 작업을 우선적으로 처리해야 하므로 작업시간 오름차순 정렬
                return a[1] - b[1]
            })
            continue
        }

        // 우선순위큐에 있는 작업들 수행
        if (priorityQueue.length !== 0) {
            time += priorityQueue[0][1]
            answer += time - priorityQueue[0][0]
            priorityQueue.shift()
        } else {
            // 작업은 남아있는데 우선순위 큐에 없다는것은 시간계산을 할 필요 없이 다음 작업을 첫 작업이라고 생각해도 됨
            time = jobs[j][0]
        }
    }
    return parseInt(answer / jobs.length)
}