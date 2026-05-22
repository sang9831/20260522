(function () {
  // 익명함수
  console.log("나는 존재한다");
})();
// 한번쓰고 버릴떄

const f = function (fn) {
  fn();
  console.log("나는 존재한다 2");
};

f(function () {
  console.log("ㅎㅇ");
});

console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");

a(); // 선언 전
//html script -> 언제 해석될지 모름. html에 button, onclick 속성에 js 함수. html이 먼저 등장해서 위치를 잡은다음 뒤에 script, (var, function) /hoist (감아올리기) -> let, const, function? -> let, const, 표현식 = 익명함수.

function a() {
  console.log("호이스팅");
}

// 화살표 함수 (유사 lambda)
// 하스켈, 리스프 - (스칼라...) - 클로져 - ocaml
(function () {});
// (입력) -> (출력)

const af = () => 0;
af();
console.log(af());

const af2 = (a) => console.log(`실행 결과 : ${a}`);
console.log(af2(1));

const af3 = (a) => {
  a++;
  a *= 2;
  return a;
};

console.log(af3(100));
