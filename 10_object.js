const program = {
  name: "부자로 만들어 주는 로또 생성기",
  numbers: [],
  pickNumber() {
    console.log("숫자를 뽑았습니다");
  },
  trash: "지워주세요",
};

console.log(`프로그램 이름 : ${program.name}`);
console.log(`프로그램 뽑은 숫자 : ${program.numbers}`);
program.pickNumber();

program.language = "JS"; // 프로퍼티 추가

program.numbers = [1, 2, 3, 5, 8, 13]; // 프로퍼티 수정
delete program.trash; // 프로퍼티 삭제

console.log(program);

console.log(Object.keys(program));
console.log(Object.values(program));
console.log(Object.entries(program));

for (const k of Object.keys(program)) {
  console.log(k);
}
for (const v of Object.values(program)) {
  console.log(v);
}
for (const e of Object.entries(program)) {
  console.log(e);
}
for (const [k, v] of Object.entries(program)) {
  // 구조분해할당
  console.log(k, v);
}
