// function solution(id_list, report, k) {
function solution() {
    const id_list = ["muzi", "frodo", "apeach", "neo"];
    const report = [
        "muzi frodo",
        "apeach frodo",
        "frodo neo",
        "muzi neo",
        "apeach muzi"
    ];
    const k = 2;

    const obj = {};
    report.map((item) => {
        const id = item.split(" ")[1];
        console.log(Object.keys(obj).includes(id));
        if (!Object.keys(obj).includes(id)) {
            obj[id] = 1;
        } else {
            obj[id] += 1;
        }
    });
    console.log(obj);

    var answer = [];
    return answer;
}

solution();
