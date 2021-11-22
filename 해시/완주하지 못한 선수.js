function solution(participant, completion) {

    let participantMap = {}
    for (var i = 0; i < participant.length; i++) {
        if (participantMap.hasOwnProperty(participant[i])) {
            participantMap[participant[i]] = participantMap[participant[i]] + 1
        } else {
            participantMap[participant[i]] = 1
        }
    }
    for (var i in completion) {
        participantMap[completion[i]] = participantMap[completion[i]] - 1
    }

    return Object.keys(participantMap).filter((v) => {
        return participantMap[v] > 0
    })[0]
}