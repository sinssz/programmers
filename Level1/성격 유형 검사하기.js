function solution() {
    const survey = ["AN", "CF", "MJ", "RT", "NA"];
    const choice = [5, 3, 2, 7, 5];
    const types = ["RT", "CF", "JM", "AN"];

    const totalPoint = {
        R: 0,
        T: 0,
        C: 0,
        F: 0,
        J: 0,
        M: 0,
        A: 0,
        N: 0
    };
    survey.map((item, index) => {
        const point = choice[index];
        const [disagree, agree] = item;
        console.log(agree, disagree, point);

        totalPoint[point > 4 ? agree : disagree] += Math.abs(point - 4);
    });

    const answer = types
        .map(([a, b]) => (totalPoint[a] >= totalPoint[b] ? a : b))
        .join("");
    return answer;
}

solution();

// ["TR", "RT", "TR"][7, 1, 3]	"RCJA"

// 1번 지표	라이언형(R)	6	튜브형(T)	1
// 2번 지표	콘형(C)	0	프로도형(F)	0
// 3번 지표	제이지형(J)	0	무지형(M)	0
// 4번 지표	어피치형(A)	0	네오형(N)	0
