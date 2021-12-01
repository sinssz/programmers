function solution(numbers) {
    var answer = '';
    var strNumber = numbers.map((v) => (v.toString())).sort((a, b) => ((b+a) - (a+b))).join("")
    return strNumber[0] == "0" ? "0" : strNumber
}