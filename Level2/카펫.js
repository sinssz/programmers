function solution(brown, yellow) {
    const total = brown + yellow;

    for (let height = 3; height <= brown; height++) {
        if (!(total % height)) {
            let width = total / height;

            if ((height - 2) * (width - 2) === yellow && width >= height) {
                return [width, height];
            }
        }
    }
}

solution(10, 2);
