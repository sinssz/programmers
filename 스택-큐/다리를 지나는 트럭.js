function solution(bridge_length, weight, truck_weights) {
    bridge_length = 100
    weight = 100
    truck_weights = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]

    var answer = 0;
    var proceeding = []
    for (var i = 0; i < bridge_length; i++) {
        proceeding.push(0)
    }
    while (proceeding.length) {
        proceeding.shift()
        answer += 1
        if (truck_weights.length) {
            var totalWeight = proceeding.reduce((pre, curr) => (pre + curr))

            if (totalWeight + truck_weights[0] <= weight) {
                proceeding.push(truck_weights.shift())
            } else {
                proceeding.push(0)
            }
        }
    }
    return answer;
}