console.log(fun); // 함수 선언 => 객체 취급
console.log(typeof fun); // function (일급객체)
console.log(fun()); // 호출 시 값이 결정
console.log(bar);
// console.log(foo); // ReferenceError: foo is not defined
foo = 100;
console.log(foo);
var bar = 200;
console.log(bar);

function fun() {
  return 0;
}
