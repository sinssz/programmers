function solution(numbers) {
    var arr = numbers.split("")

    var resultNumbers = []
    function getPermutation(arr, fixed) {
        if (arr.length > 0) {
            for (var i = 0; i < arr.length; i++) {
                var newArr = [...arr]
                var newFixed = fixed + arr[i]
                newArr.splice(i, 1)
                if (resultNumbers.indexOf(Number(newFixed)) == -1 && isPrimeNum(newFixed)) {
                    resultNumbers.push(Number(newFixed))
                }
                getPermutation(newArr, newFixed)
            }
        }
    }

    function isPrimeNum(data) {
        let num = Number(data)
        if (num <= 1) return false
        if (num == 2) return true
        for (var i = 2; i < num; i++) {
            if (num % i == 0) return false
        }
        return true
    }

    getPermutation(arr, "")

    return resultNumbers.length
}