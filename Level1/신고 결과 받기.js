// id_list	report	k	result
// ["muzi", "frodo", "apeach", "neo"]	["muz                                                                                                                                                                                                                                     i frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"]	2	[2,1,1,0]
// ["con", "ryan"]	["ryan con", "ryan con", "ryan con", "ryan con"]	3	[0,0]
function solution() {
  const id_list = ["muzi", "frodo", "apeach", "neo"];
  const report = [
    "muzi frodo",
    "apeach frodo",
    "frodo neo",
    "muzi neo",
    "apeach muzi",
  ];
  const k = 2;

  // 중복 신고 제거
  const new_report = [...new Set(report)];

  // 메일 전달 건수 배열
  const reportCount = Array(id_list.length).fill(0);

  // 정지 아이디
  const out_id_list = [];

  // 결과
  const result = Array(id_list.length).fill(0);

  new_report.map((report) => {
    const [user, reporter] = report.split(" ");
    // 신고당한 아이디 인덱스
    const reportIdIndex = id_list.indexOf(reporter);

    // 몇번 신고당했는지 체크
    reportCount[reportIdIndex] += 1;

    // 신고 기준에 해당하는지 체크
    if (reportCount[reportIdIndex] >= k) {
      // 해당하면 신고된 아이디 리스트에 적재
      out_id_list.push(id_list[reportIdIndex]);
    }
  });

  // 신고된 아이디로 결과 추출
  new_report.map((report) => {
    const [user, reporter] = report.split(" ");

    if (out_id_list.indexOf(reporter) >= 0) {
      const userIndex = id_list.indexOf(user);
      result[userIndex] += 1;
    }
  });

  return result;
}

solution();
