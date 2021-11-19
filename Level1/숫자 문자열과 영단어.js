function solution(s) {
    var code = {
        "zero" : 0,
        "one" : 1,
        "two" : 2,
        "three" : 3,
        "four" : 4,
        "five" : 5,
        "six" : 6,
        "seven" : 7,
        "eight" : 8,
        "nine" : 9
    }
    for(var i in code) {
        s = s.replace(new RegExp(i, "g"), code[i])
    }
    return parseInt(s);
}