function solution() {
    let nums = [1, 2, 7, 6, 4];
    let answer = 0;

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                const num = nums[i] + nums[j] + nums[k];
                let count = 0;
                for (let n = 1; n <= num; n++) {
                    if (num % n === 0) {
                        count++;
                    }
                }
                if (count === 2) answer++;
            }
        }
    }

    return answer;
}

solution();
