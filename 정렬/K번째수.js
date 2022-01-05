function solution(array, commands) {
    var answer = [];
    for (var i = 0; i < commands.length; i++) {
        var [start, end, k] = commands[i] // 비구조화 할당
        var newArr = array.filter((v,i) => (i >= start - 1 && i <= end - 1)) // start, end 를 인덱스로 하는 새 배열 생성
        .sort((a,b)=>a - b) // 정렬
        .filter((v,i)=>(i + 1 == k))[0] // k 번째

        answer.push(newArr)
    }
    return answer;
}